const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");
const mongoose = require("mongoose");
const generateUserCode = require("../services/userCode");
const ROLES = require("../constants/roles");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const Admin = require("../models/admin.model");

// create admin controller

const createAdminController = async(req,res)=>{

    const session = await mongoose.startSession();

    try {
        
       await session.startTransaction();

        const {name,email,schoolId ,schoolCode,phoneNumber} = req.body;

        // generate user code
        const userCode = await generateUserCode(ROLES.admin,schoolCode,schoolId,session);

        const hashPass = await bcrypt.hash("1234567",8);

        // create user
        const userModel = new User({
            userCode,
            password:hashPass,
            name,
            schoolId,
            role:ROLES.admin
        });

        const user = await userModel.save({session});

        // create admin
        const adminModel = new Admin({
            userId:user._id,
            schoolId,
            email,
            phone_number:phoneNumber
        });

        const admin = await adminModel.save({session});

        await session.commitTransaction();
        session.endSession();

        sendResponse(res , {
            statusCode:201,
            message:"successfully created",
            data:admin
        });

    } catch (error) {

        // rollback
        await session.abortTransaction();
        
        session.endSession();

        sendError(res,{
            message
        });
    }
};



module.exports = {createAdminController};