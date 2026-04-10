

// for creating schools

const Director = require("../models/director.model");
const School = require("../models/school.model");

const createSchoolController = async(req,res)=>{
    try {
        const {schoolName , schoolCode} = req.body;

        if(!schoolCode || !schoolName){
           return res.status(403).json({
                status:false,
                message:"all fields are required!"
            });
        }

        const schoolModel = new School({
            schoolName:schoolName,
            schoolCode:schoolCode
        });
        
        // school already created or not
        // code 



        const result = await schoolModel.save();

        // school successfully created here
        // step 1 create Director
        // step 2 create Principal
        // step 3 create Admin
        // step 4 create Accountant

        // before creating all the role we have to create user first
/*

     1-   Instead of creating all roles here , we can create by    another api call after creating school.
    
     2 - create one by one director , principal , admin , accountant - by super admin team

     3 - i did not write all the code here

        // const directorModel = new Director({

        // });

*/


    res.status(201).json({
        status:true,
        message:"successfully created school!",
        school:result
    });

    
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"Internal error occured!"
        });
    }
};

module.exports = {createSchoolController};