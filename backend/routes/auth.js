const express = require('express');

const User = require('../models/User');

const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = ".envFile/configFile";
const nodemailer = require('nodemailer');

const fetchuser = require('../middleware/fetchuser');
const UserOtpVerification = require('../models/UserOtpVerification');
const { create } = require('../models/User');

// Route 1: Create a new account for a user using POST "/api/auth/createaccount". No login required.
router.post('/createaccount',[
    body('name', 'Name Too Short').isLength( {min:3} ),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a strong password').isLength({min:3})
], async (req, res)=>{
    const errors = validationResult(req);
    let success=false;

    if(!errors.isEmpty()){
        return res.status(400).json({success, errors: errors.array()});
    }
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({success, error: 'A accout exists with this email, please try to login'});
        }
        success = true;
        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'northflex2002@gmail.com', // generated ethereal user
                pass: 'northflex@123', // generated ethereal password
            },
        });
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

        var mailOptions = {
            from: 'northflex2002@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: "Verification Code", // Subject line
            text: `${otp}`, // plain text body
        }

        const newOtpVerification = await UserOtpVerification.create({
            email: req.body.email,
            otp: otp,
            createdAt: Date.now(),
            expiredAt: Date.now() + 3600000,
        })
        // console.log(newOtpVerification);

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                res.json({success:true});
            }
        })

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPassword
        })
        const data = {
            user:{
                email: user.email
            }
        }
        console.log(user.email);
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({success, authToken: authToken, user: user.email});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error.");
    }
})

//Router 2: Authenticate a user using POST "/api/auth/login". No login required.

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter password').exists()
], async (req, res)=>{
    let success=false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({success, errors: errors.message});
    }

    try {
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success, error: "Invalid Email"});
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(400).json({success, error: "Invalid Password"});
        }
        
        const data = {
            user: {
                name:user.name,
                email: user.email
            },
            
        }
        authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken, user:user.name});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error.");
    }
})

router.post('/getuser', fetchuser, async(req, res)=>{

    try {
        const email = req.user.email;
        // console.log(username);
        const user = await User.findOne({email}).select("-password");

        res.json({user});

    } catch (error) {
        console.error(error.message);
        return res.status(400).json({success, error: "Invalid Email"});

    }

})

router.post('/resetpasswordotp', async(req, res)=>{
    try {
        let success=false;
        let user = await User.findOne({email: req.body.email});
        
        success = true;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'northflex2002@gmail.com', // generated ethereal user
                pass: 'northflex@123', // generated ethereal password
            },
        });
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

        var mailOptions = {
            from: 'northflex2002@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: "Reset password verification code", // Subject line
            text: `${otp}`, // plain text body
        }

        const newOtpVerification = await UserOtpVerification.create({
            email: req.body.email,
            otp: otp,
            createdAt: Date.now(),
            expiredAt: Date.now() + 3600000,
        })

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                res.json({success:true});
            }
        })
        
    } catch (error) {
        
    }
})

router.post('/verifyotp', async(req, res)=>{
    try {
        let success=false;
        let {email, otp} = req.body
        if(!email || !otp){
            return res.status(400).json({success, error: "Empty otp details are not allowed"});
        }

        let UserOtpVerificationRecords = await UserOtpVerification.find();

        if(UserOtpVerificationRecords.length<=0){
            return res.status(400).json({success, error: "Account record doesn't exist or been verified already. Please try to sign up or login"});
        }

        const {expiredAt, otp: compareOtp} = UserOtpVerificationRecords[0];
        if(expiredAt < Date.now()){
            await UserOtpVerification.deleteMany({email});
            return res.status(400).json({success, error: "Verification code expired. Please generate again."});
        }

        if(otp!=compareOtp){
            return res.status(400).json({success, error: "Enter the valid OTP."});
        }
        success=true;
        await User.updateOne({email}, {verified: true});
        await UserOtpVerification.deleteMany({email});

        res.json({success, message: "The email is verified."});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/resetpassword', async(req, res)=>{
    try {
        let success=false;
        let {email, otp} = req.body
        if(!email || !otp){
            return res.status(400).json({success, error: "Empty otp details are not allowed"});
        }

        let UserOtpVerificationRecords = await UserOtpVerification.find();

        if(UserOtpVerificationRecords.length<=0){
            return res.status(400).json({success, error: "Account record doesn't exist or been verified already. Please try to sign up or login"});
        }

        const {expiredAt, otp: compareOtp} = UserOtpVerificationRecords[0];
        if(expiredAt < Date.now()){
            await UserOtpVerification.deleteMany({email});
            return res.status(400).json({success, error: "Verification code expired. Please generate again."});
        }

        if(otp!=compareOtp){
            return res.status(400).json({success, error: "Enter the valid OTP."});
        }
        success=true;

        await UserOtpVerification.deleteMany({email});

        res.json({success, message: "The email is verified."});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/changepassword', async(req, res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt);

        let user = await User.findOneAndUpdate({email: req.body.email}, {password: securedPassword});

        user = await User.findOne({email: req.body.email});
        res.json({success: true, email: req.body.email, newpassword: user.password})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;