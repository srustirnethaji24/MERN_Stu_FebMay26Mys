// Handling Synchronous Errors

const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Visit / check?id=10 or /check without id');
});

app.get('/check', function(req, res, next){
    try {
        if(!req.query.id) {
            throw new Error('Query Parameter ID is required');
        }


        res.json({
            success: true,
            id:req.query.id
        });
    }
    catch(error) {
        // Forwarding the error to centralized error middleware
        next(error);
    }
});

app.use(function(error, req, res, next){
    res.status(400).json({
        success: false,
        message: error.message
    });
});

app.listen(4000, function(){
    console.log('Express Server is running on  http://localhost:4000');
});