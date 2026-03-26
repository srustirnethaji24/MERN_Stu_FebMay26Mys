//Handling different GET routes

const http = require("http");

const server = http.createServer(function(req,res){
    if (req.method === "GET" && req.url ==="/") {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Home page / Dashboard");
        return;
    }
    if (req.method === "GET" && req.url ==="/about") {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("About Route.WElcome to About Us Page");
        return;
    }
    if (req.method === "GET" && req.url ==="/products") {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Products Route.WElcome to Products Page");
        return;
    }
    if (req.method === "GET" && req.url ==="/users") {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Returning all users.");
        return;
    }
    // POST = create
    //curl -X http://locahost :3001/users
    //curl: Client URL: free,open src cli tool used to transfer from a 
    // server using various network protocol.
    if (req.method === "POST" && req.url ==="/users") {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("New User Created.");
        return;
    }
    //Unknown route fallback
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("Route not found.");
});
server.listen(3001,function(){
    console.log("Server is running at the http://localhost:3001");
});