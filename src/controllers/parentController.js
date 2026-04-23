const mongoose = require("mongoose");
const User = require("../models/user.model");
const generateUserCode = require("../services/userCode");
const ROLES = require("../constants/roles");
const bcrypt = require("bcrypt");
const Parent = require("../models/parent.model");

const createParentController = async(req,res)=>{

const session = await mongoose.startSession();

    try {

        await session.startTransaction();

        const {name,email,phoneNumber,schoolCode , schoolId} = req.body;

        const userCode = await generateUserCode(ROLES.parent,schoolCode,schoolId,session);

        const hashPass = await bcrypt.hash("1234567",8);

        const userModel = new User({
            userCode,
            hashPass,
            name,
            schoolId,
            role:ROLES.parent
        });

        const user = await userModel.save({session});

        const parentModel = new Parent({
            userId:user._id,
            schoolId,
            email,
            phone_number:phoneNumber
        });

        const parent = await parentModel.save({session});

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