//Basics of NodeJS modules
const moduleTitle = "NodeJs  module basics";
function describeModule (){
    console.log("This file is its own module ")
    console.log("Title: ",moduleTitle);
    console.log("Local values inside this file unless exported");
}
describeModule(); // invoking the function