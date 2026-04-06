const Role = require("../models/role.model");

// create role controller
const createRoleController = async(req,res)=>{
    try {
        // get the role name and their permissions
        // mapping role with permission
        // save to database

        const {role , permissions} = req.body;

        if(!role || !permissions){
         return res.status(400).json({
                status: false,
                message: "role and permissions are required"
            });
        }

        const RoleModel =new Role({
            role:role,
            permissions:permissions
        });

       var result =  await RoleModel.save();

        res.status(201).json({
            status:true,
            message:"successfully role created",
            role:result
        });



    } catch (error) {
    console.error(error);
    return res.status(500).json({
        status: false,
        message: "Internal server error"
    });
    }
}

// get role controller

const getRoleController = async(req,res)=>{
    try {
        const roles = await Role.find();

        if(!roles){
           return res.status(404).json({
                status:false,
                message:"Role not found"
            });
        }

        res.status(200).json({
            status:true,
            message:"successfully get roles",
            role:roles
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
};


module.exports = {createRoleController};