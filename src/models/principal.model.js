const mongoose = require("mongoose");

const principalSchema = mongoose.Schema({

    userId : {
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true,
        index:true
    },

    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      index: true,
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



const Principal = mongoose.model("Principal" , principalSchema);

module.exports = Principal;