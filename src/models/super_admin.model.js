const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
        userId : {
            type:mongoose.Types.ObjectId,
            ref:"User",
            required:true,
            unique:true,
            index:true
        },
    
        email:{
            type:String,
            required:true,
        },
    
        phone_number:{
            type:Number,
            required:true,
        },

});


const SuperAdmin = mongoose.model("SuperAdmin", superAdminSchema);

module.exports = SuperAdmin;