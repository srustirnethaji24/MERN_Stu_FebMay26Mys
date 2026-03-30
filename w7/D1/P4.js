// Middleware usage in Express.js
// Middleware runs during the request-response cycle.
// Middleware can inspect or change the request before a route responds.
// next() passes control to the next step.
const express = require('express');
const app = express();

// app.use() registers a middleware. This middleware runs for every incoming request.
app.use(function(req,res,next){
    console.log("Request Received at ",req.method,req.url);
    // next() is required when this middleware does not finish the response.
    next();
});

app.get("/users",function(req,res){
    res.send("Middleware Executed Before The Route");
});

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});