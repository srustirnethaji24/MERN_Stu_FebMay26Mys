//Creating a simple HTTP server

const http = require("http");

//createServer(): creates a HTTP server instance
//Accepts a callback with two important objects
//1. req: Incoming request details
//2. res: Outgoing response control

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body closes the response
    res.end("Hello from NodeJS HTTP Server.");
});

//listen() binds the server to a port and starts accepting request
server.listen(3000,function(){
    console.log("Server is running at the http://localhost:3000");
});