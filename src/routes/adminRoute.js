
const express = require("express");
const { createAdminController } = require("../controllers/adminController");

const adminRoute = express.Router();

adminRoute.post("/create-admin",createAdminController);



module.exports = adminRoute;