// Sending JSON response

const express = require('express');
const app = express();

app.get("/api/status",function(req,res){
    // res.json() automatically serializes the object and sets the JSON content type header.
    res.json({
        success: true,
        message: "Express API is working."
    });
});

app.get("/api/error",function(req,res){
    // res.json() automatically serializes the object and sets the JSON content type header.
    res.status(404).JSON({
        success: false,
        message: "Requested Resource Is Not Found."
    });
});

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});