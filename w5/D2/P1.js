//Introduction to callback Function
function greetUser(name,callback){
    console.log("Hello,"+name);
// the callback fun is executed only after the execution of the current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is commplete.");
}

greetUser("Srusti",showCompletionMessage);