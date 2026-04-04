const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },

    schoolCode:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },

});


const School = mongoose.model("School",schoolSchema);

module.exports = School;