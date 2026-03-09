// try catch basics
// const error = document.getElementById("error");
// Reference error
// try{
//    console.log("Trying to access undefined variable");
//    console.log(notDefined);
  
// }
// catch(err){
//     console.log("Error caught", err.name,"-",err.message);
// }
//  console.log("Program execution continues");

 // Json parsing error
 let jsonText = "{json}";
 try{
    let data = JSON.parse(jsonText);
    console.log(data);
 }
 catch(err){
    console.log("JSON parse error:",err.message);
 }

try{
    let num = 10;
    num();
 }
 catch(err){
    console.log("caught error:",err.name);
 }