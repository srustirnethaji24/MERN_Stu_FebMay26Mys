// Handling Different HTTP Methods In Express
const express = require('express');
const app = express();

// To Read
app.get("/users",function(req,res){
    res.send("Returing All Users");
});

// To Create
app.post("/users",function(req,res){
    // res.status() sets the HTTP status code before sending the response body.
    res.status(201).send("User Created.");
}); 

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});