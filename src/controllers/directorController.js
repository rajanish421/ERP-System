const { default: mongoose } = require("mongoose");
const User = require("../models/user.model");
const generateUserCode = require("../services/userCode");
const Roles = require("../constants/roles");
const bcrypt = require("bcrypt");
const Director = require("../models/director.model");
const ROLES = require("../constants/roles");

const createDirectorController = async(req,res)=>{

    const session = await  mongoose.startSession();

    try {
        // we have to use transation funtion to maintain atomicity/acid property

        // initialize session
        // start transation
        // do your work

        session.startTransaction();

    
        const data = req.body;

        const userCode = await generateUserCode(Roles.director , data.schoolCode,data.schoolId,session);

        const hashPass = await bcrypt.hash("1234567",8);

        // create user 
        //   |->  create userCode
        //        create password  
        //        

        const userModel = new User({
            userCode,
            password:hashPass,
            name:data.name,
            schoolId:data.schoolId,
            role:ROLES.director
        });

        const user = await userModel.save({session}); 


        const directorModel = new Director({
            userId:user._id,
            schoolId:data.schoolId,
            email:data.email,
            phone_number:data.phoneNumber
        });

        const director = await directorModel.save({session});
        
       await session.commitTransaction();
             session.endSession();

        // get schoolId from super-admin details store in middleware

        // create director

        // if all success then stop transation
        res.status(201).json({
           status:true,
           message:"successfully created",
           data:director 
        });

    } catch (error) {

        // if error occured then rollback .
        await session.abortTransaction();
        session.endSession();

        console.log(`eroor -----------> ${error}`);

        res.status(500).json({
            status:false,
            message:"internal api error"
        });
    }
}

module.exports = {createDirectorController};