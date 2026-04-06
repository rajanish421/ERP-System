const express = require("express");
const { createRoleController, getRoleController } = require("../controllers/roleController");

const roleRoute = express.Router();


roleRoute.post("/create-role",createRoleController); // also add middleware for only admin can create a role

roleRoute.get("/get-roles",getRoleController); // ad authorization


module.exports = {roleRoute};