const mongoose = require("mongoose");

const user2Schema = new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String

    }
});

module.exports = mongoose.model('user2Data',user2Schema);