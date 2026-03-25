// Reading & Writing files Aysnchronously with callbacks
const fs = require("fs");
const path =require("path");

const filepath = path.join(__dirname,"async-note.txt");

//to write to a file
fs.writeFile(
    filepath,
    "This is writtn aysnchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("Write error: ",writeError.message);
            return;
        }
        console.log("File return ayschronously.");
    }
); 

//read from a file
const content = fs.readFile(filepath,"utf-8",
    function(readError,content){
        if(readError){
        console.log("Read Error: ",readError.message);
        return;
        }
        console.log(content);  
    }
);
console.log("Script continues while file operation are in progress.");