const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    role:String,
    permissions:[String],
    // schoolId: --> also include in production [separate ]
});


const Role = mongoose.model("Role",);

module.exports = Role;