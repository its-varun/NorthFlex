const express = require('express');
const router = express.Router();


const nodemailer = require('nodemailer');

// Route 1
router.post('/support', (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'garvitchaurasiya2525@gmail.com', // generated ethereal user
                pass: '6350170845', // generated ethereal password
            },
        });

        // const element = subscribers[index].email;
        // console.log(element);
        var mailOptions = {
            from: 'garvitchaurasiya2525@gmail.com', // sender address
            to: 'garvit1146@chitkara.edu.in', // list of receivers
            subject: "Query Asked", // Subject line
            text: req.body.name+"\n"+req.body.mobileno+ "\n" + req.body.email + '\n' + req.body.message, // plain text body
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                res.json({success:true});
            }
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error.");
    }
})


// Route 1
router.post('/dealerenquiry', (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'garvitchaurasiya2525@gmail.com', // generated ethereal user
                pass: '6350170845', // generated ethereal password
            },
        });

        // const element = subscribers[index].email;
        // console.log(element);
        var mailOptions = {
            from: 'garvitchaurasiya2525@gmail.com', // sender address
            to: 'garvit1146@chitkara.edu.in', // list of receivers
            subject: "Query Asked", // Subject line
            text:   req.body.firstname+" "+
                    req.body.lastname+"\n"+
                    req.body.email+"\n"+
                    req.body.mobileno+"\n"+
                    req.body.businessname+'\n'+
                    req.body.postalcode+"\n"+ // plain text body
                    req.body.state+"\n"+
                    req.body.city+"\n"+
                    req.body.description
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                res.json({success:true});
            }
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error.");
    }
})

module.exports = router;