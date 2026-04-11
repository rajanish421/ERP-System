const express = require("express");
const { createAccountantController } = require("../controllers/accountantController");


const accountantRoute = express.Router();
accountantRoute.post("/create-accountant",createAccountantController);



module.exports = accountantRoute;

