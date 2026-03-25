// Reading & Writing files synchronously

const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname,"sync-note.txt");// function of the path that joins tp the filename

//fs.writeFileSync(filepath,"This file was return using  writFileSync().\nSynchronous operation block execution");

// Append to a file 
fs.appendFile(filepath,"New text added using fs.appendFile.",
    function(error){
        if(error){
            console.log("Append error: ",error.message);
        }
        console.log("File content Appended");
    }
);

console.log("File return sychronously.");

const content = fs.readFileSync(filepath,"utf-8");

console.log("File read sychronously.");
console.log("File content:\n",content);