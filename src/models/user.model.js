const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userId:{
        type:String,
        unique:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        trim:true,
        minlength : 6
    },
    name : {
        type:String,
        required : true,
        trim : true
    },
    schoolId:{
        type:mongoose.Types.ObjectId,
        ref:"School",
        required : true,
        index:true
    },
    

});

const User = mongoose.model("User" , userSchema);

module.exports = User;