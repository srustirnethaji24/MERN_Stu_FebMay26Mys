// Handling Asynchronous errors with callbacks
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/file",function(req,res,next){
    const filePath = path.join(__dirname,"newFile.txt");
    fs.readFile(filePath,"utf-8",function(error,data){
        if(error){
            //Forwarding the async arror
            return next(error);
        }
        res.send(data);
    });
});

app.use(function(error,req,res,next){
    res.status(404).json({ success: false,message:"File/Folder doesn't exist.", OriginalMessage: error.message });
});

app.listen(4000, function(){
    console.log("Express Server is running on  http://localhost:4000");
});