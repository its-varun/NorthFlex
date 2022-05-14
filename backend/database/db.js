const mongoose = require('mongoose');

// const mongoDB_URI = "mongodb+srv://igarvit:garvit1146@cluster0.vledw.mongodb.net/northflex?retryWrites=true&w=majority";
const mongoDB_URI = "mongodb://localhost:27017/northflex";

const connectToMongoDB = ()=>{
    mongoose.connect(mongoDB_URI, ()=>{
        console.log("Connected to MongoDB successfully");
    })
}

module.exports= connectToMongoDB;