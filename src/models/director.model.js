const mongoose = require("mongoose");

const directorSchema = mongoose.Schema({

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



const Director = mongoose.model("Director" , directorSchema);

module.exports = Director;