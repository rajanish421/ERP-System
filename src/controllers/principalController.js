const Roles = require("../constants/roles");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// create principal controller

const generateUserCode = require("../services/userCode");
const User = require("../models/user.model");
const Principal = require("../models/principal.model");
const sendResponse = require("../utils/sendResponse");
const sendError = require("../utils/sendError");

const createPrincipalController = async(req,res)=>{

    const session = await mongoose.startSession();

    try {

        await session.startTransaction();

        const {name,email,phoneNumber,schoolCode , schoolId} = req.body;

        //generate userCode
       const userCode = await generateUserCode(Roles.principal,schoolCode,schoolId,session);

        const hashPass = await bcrypt.hash("1234567",8);

        // create user
        const userModel = new User({
            userCode,
            password:hashPass,
            name,
            schoolId,
            role:Roles.principal
        });

        const user = await userModel.save({session});

        // create principal
        const principalModel = new Principal({
            userId:user._id,
            schoolId,
            email,
            phone_number:phoneNumber
        });

        const principal = await principalModel.save({session});

       await session.commitTransaction();
        session.endSession();

        sendResponse(res ,{
            statusCode:201 ,
            message:"successfully created",
            data: principal
        });
       

    } catch (error) {
        console.log(`Error from here ${error}`);
        // rollback
        await session.abortTransaction();
        session.endSession();
       sendError(res , "Internal Error");
    }
};

module.exports = {createPrincipalController};