const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema({
    schoolName:{
        type:String,
        required:true,
        trim:true

    },
    schoolCode:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        uppercase:true,
        index:true
    },

},
{ timestamps: true },
);


const School = mongoose.model("School",schoolSchema);

module.exports = School;