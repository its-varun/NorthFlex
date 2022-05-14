const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserOtpVerificationSchema = new Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    otp: {
        type: Number,
        reqired: true
    },
    createdAt:{
        type: Date,
    },
    expiredAt:{
        type: Date
    }

})

const UserOtpVerification = mongoose.model('userotpverification', UserOtpVerificationSchema);
module.exports = UserOtpVerification;