const Counter = require("../models/counter.model");

// not in used 


const counterController = async(req,res)=>{
    try {
        
        const {schoolCode , role} = req.body;
        if(!schoolCode || !role){
            return res.status(403).json({
                status:false,
                message:"all fields are required"
            });
        }

        const counterModel = new Counter({
            schoolCode:schoolCode,
            role:role
        });

       const result = await counterModel.save();

       res.status(201).json({
            status:true,
            message:"created successfully",
            counter:result
       });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:false,
            message:"Internal Error"
        });
    }
}

module.exports = {counterController};