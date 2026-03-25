// Renaming ,deleting and checking the file existence

const fs = require("fs");
const path =require("path");

const originalpath = path.join(__dirname,"draft-report.txt");
const renamedpath = path.join(__dirname,"final-report.txt");

fs.writeFileSync(originalpath,"Draft report content");
console.log("Does draft-report.txt exists?",fs.existsSync(originalpath));


//Rename a file
fs.renameSync(originalpath,renamedpath);
console.log("Does draft-report.txt exists?",fs.existsSync(originalpath));

// delete a file
fs.unlinkSync(renamedpath);
console.log("Does final-report.txt exists?",fs.existsSync(originalpath));
