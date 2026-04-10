const express = require("express");
const { createDirectorController } = require("../controllers/directorController");

const directorRoute = express.Router();

// create director route

directorRoute.post("/create-director",createDirectorController);




module.exports = directorRoute;