// Middleware order and route specific middleware in Express.js

const express = require('express');
const app = express();

// Global Middleware - runs for every request.
app.use(function(req,res,next){
    console.log("Global Middleware:",req.method,req.url);
    next();
});

app.get("/users",function(req,res){
    res.send("Home Route.");
});

app.get("/admin",function(req,res,next){
    console.log("Route Specific Middleware For /admin");
    next();
},function(req,res){
    res.send("Admin Route Reached.")
});

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});