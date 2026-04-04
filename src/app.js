const express = require("express");

const app = express();

// testing api

app.get("/" , (req,res)=>{
    res.send("api is working properly");
});


module.exports = app;