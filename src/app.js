const express = require("express");
const { roleRoute } = require("./routes/roleRoutes");
const schoolRoute = require("./routes/schoolRoute");
const directorRoute = require("./routes/directorRoute");
const principalRoute = require("./routes/principalRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();

// middlewares
app.use(express.json());


// route for role
app.use("/api/v1" , roleRoute);


// route for school
app.use("/api/v1/super-admin",schoolRoute);


// route for director

app.use("/api/v1/super-admin",directorRoute);

// route for principal
app.use("/api/v1/super-admin/",principalRoute);


// route for admin
app.use("/api/v1/super-admin",adminRoute); 

// //route counter
// app.use("/api/v1/super-admin",counterRoute);  <-- Not in use





module.exports = app;