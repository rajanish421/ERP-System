const express = require("express");
const { createSchoolController } = require("../controllers/schoolsController");

const schoolRoute = express.Router();

schoolRoute.post("/create-school" , createSchoolController);


module.exports = schoolRoute;