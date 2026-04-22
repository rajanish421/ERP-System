const mongoose = require("mongoose");
const generateUserCode = require("../services/userCode");
const ROLES = require("../constants/roles");
const User = require("../models/user.model");
const bcrypt = reuire("bcrypt");



const createTeacherController = async(req ,res)=>{
    const session = await mongoose.startSession();
    try {
        
       await session.startTransaction();

       const {name , email , schoolId , schoolCode, phoneNumber} = req.body;

    const userCode = await generateUserCode(ROLES.teacher,schoolCode,schoolId,session);

    const hashPass = await bcrypt.hash(); 


    const user = new User({
        userCode,
        
    });


    } catch (error) {
        
    }
};



module.exports = {createTeacherController};