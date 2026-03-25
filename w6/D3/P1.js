// Introduction to the NodeJS file system (fs) built in module

const fs = require("fs");
const fsPromises = require("fs/promises");

console.log("Type of fs.readFile:",typeof fs.readFile);
console.log("Type of fs.writeFile:",typeof fs.writeFile);

console.log("Type of fspromises.readFile:",typeof fsPromises.readFile);
console.log("Type of fspromises.writeFile:",typeof fsPromises.writeFile);