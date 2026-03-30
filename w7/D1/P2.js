// Basic Routing In Express

const express = require('express');
const app = express();

    app.get("/",function(req,res){
        res.send("Home Route In Express Server");
    });

    // Route for "/about" URL
    app.get("/about",function(req,res){
        res.send("About Route In Express Server");
    });

     app.get("/products",function(req,res){
        res.send("Products Route In Express Server");
    });

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});