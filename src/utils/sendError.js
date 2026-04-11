

const sendError = (res,{statusCode = 500,message})=>{
    res.status(statusCode).json({
        status:false,
        message
    });
};

module.exports = sendError;