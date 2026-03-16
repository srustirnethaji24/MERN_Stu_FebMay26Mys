// Introduction to Node.js

const runtimeName = "Node.js";
//  console.log("Introduction to Node.js");
//  console.log(`${runtimeName} runs javascript outside the browser`);

 const commonusers = [
    "used for server-side app",
    "automation scripts can be created"
 ];
 //array desctructuring : reconstruct the array value
 console.log (commonusers[0]);
 console.log (commonusers[1]);
 commonusers.forEach((commonuse,index)=>{
    console.log(`${index+1}.${commonuse}`);
 });