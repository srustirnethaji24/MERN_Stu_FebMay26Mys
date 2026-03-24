// Handling of error event in EventEmitter
const EventEmitter = require("events");

const fileEmitter = new EventEmitter();

//Register an Error listener 
fileEmitter.on("error",function(errormessage){
    console.log("emitter handler error",errormessage);
});

// Normal Event Listner :Happy scenairo
fileEmitter.on("fileprocessed",function(fileName){
    console.log("File processed succesfully.",fileName);
});

fileEmitter.emit("fileprocessed","report.csv");
fileEmitter.emit("error","File processing failed.");