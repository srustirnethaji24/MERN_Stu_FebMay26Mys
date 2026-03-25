// Reading & Writing files synchronously

const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname,"sync-note.txt");// function of the path that joins tp the filename

fs.writeFileSync(filepath,"This file was return using  writFileSync().\nSynchronous operation block execution");

console.log("File return sychronously.");

const content = fs.readFileSync(filepath,"utf-8");

console.log("File read sychronously.");
console.log(content);