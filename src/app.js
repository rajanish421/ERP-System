const express = require("express");
const { roleRoute } = require("./routes/roleRoutes");
const schoolRoute = require("./routes/schoolRoute");
const counterRoute = require("./routes/counterRoute");

const app = express();

// middlewares
app.use(express.json());


// route for role
app.use("/api/v1" , roleRoute);


// route for school
app.use("/api/v1/super-admin",schoolRoute);



// //route counter
// app.use("/api/v1/super-admin",counterRoute);  <-- Not in use





module.exports = app;