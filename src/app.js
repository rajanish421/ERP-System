const express = require("express");
const { roleRoute } = require("./routes/roleRoutes");

const app = express();

// middlewares
app.use(express.json());


// route for role
app.use("/api/v1" , roleRoute);


// testing api

// app.get("/" , (req,res)=>{
//     res.send("api is working properly");
// });


module.exports = app;