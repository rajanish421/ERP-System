const express = require("express");
const { counterController } = require("../controllers/counterController");

// not in use

const counterRoute = express.Router();

counterRoute.post("/create-counter",counterController);


module.exports = counterRoute;