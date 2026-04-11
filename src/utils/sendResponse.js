
const sendResponse = (res , {statusCode = 200, message,data})=>{
    res.status(statusCode).json({
        status:true,
        message,
        data
    });
}
module.exports = sendResponse;