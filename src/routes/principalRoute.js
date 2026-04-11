const express = require("express");
const { createPrincipalController } = require("../controllers/principalController");

const principalRoute = express.Router();

principalRoute.post("/create-principal",createPrincipalController);


module.exports = principalRoute;