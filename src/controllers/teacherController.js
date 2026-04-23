const mongoose = require("mongoose");
const generateUserCode = require("../services/userCode");
const ROLES = require("../constants/roles");
const User = require("../models/user.model");
const Teacher = require("../models/teacher.model");
const bcrypt = reuire("bcrypt");



const createTeacherController = async(req ,res)=>{
    const session = await mongoose.startSession();
    try {
        
       await session.startTransaction();

       const {name , email , schoolId , schoolCode, phoneNumber} = req.body;

    const userCode = await generateUserCode(ROLES.teacher,schoolCode,schoolId,session);

    const hashPass = await bcrypt.hash("1234567",8); 


    const userModel = new User({
        userCode,
        password:hashPass,
        name,
        schoolId,
        role:ROLES.teacher
    });


    const user = await userModel.save({session});

    const teacherModel = new Teacher({
        userId:user._id,
        schoolId:schoolId,
        email,
        phone_number:phoneNumber
    });

const teacher = await teacherModel.save({session});


 await session.commitTransaction();
        session.endSession();

        sendResponse(res ,{
            statusCode:201 ,
            message:"successfully created",
            data: teacher
        });


    } catch (error) {
        console.log(`Error from here ${error}`);
        // rollback
        await session.abortTransaction();
        session.endSession();
        sendError(res , "Internal Error");
    }
};



module.exports = {createTeacherController};