// Understanding path module and JSON module 

const path = require("path");
//json is loaded as a normal js object in coomonjs
const appConfig = require("./support/app-config.json");

console.log("__dirname",__dirname);
console.log("__filename",__filename);

console.log("Application name:",appConfig.appName);
console.log("environment :",appConfig.environment);
console.log("features :",appConfig.features.join(","));
