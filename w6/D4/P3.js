// Inspecting request detailes ina HTTP server

const http = require("http");

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body closes the response
    //req.methodntells the HTTP methods. such as GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("Server is running at the http://localhost:3001");
});