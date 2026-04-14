const mongoose = require("mongoose");
const sendError = require("../utils/sendError");
const sendResponse = require("../utils/sendResponse");
const generateUserCode = require("../services/userCode");
const ROLES = require("../constants/roles");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const Accountant = require("../models/accountant.model");



// create accountant controller

const createAccountantController = async(req,res)=>{
    
    const session = await mongoose.startSession();
    
    try {
        
        await session.startTransaction();

        const {name , email , schoolId , schoolCode, phoneNumber} = req.body;

        const userCode = await generateUserCode(ROLES.accountant,schoolCode,schoolId,session);

        // hash password
        
        const hashPass = await bcrypt.hash("1234567",8);



        const userModel = new User({
            userCode,
            password:hashPass,
            name,
            schoolId,
            role:ROLES.accountant
        });

        const user = await userModel.save({session});

        const accountantModel = new Accountant({
            userId:user._id,
            schoolId,
            email,
            phone_number:phoneNumber
        });

        const accountant = await accountantModel.save({session});

        await session.commitTransaction();
        session.endSession();

        sendResponse(res,{
            statusCode:201,
            message:"successfully created",
            data:accountant
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        sendError(res,{
            message
        });
        
    }
};



module.exports = {createAccountantController};