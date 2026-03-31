//Route parameters and query parameters

const express = require('express');
const app = express();

app.get("/products/:id",function(req,res){
    res.json({
        routeParameter: req.params.monkey,
        queryParameters:req.query
    });
});

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});