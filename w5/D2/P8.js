// Introduction to Promises
console.log("Program started.");
function getWelncomeMessage(){
    return new Promise (function(resolve){
        setTimeout(() =>{
          resolve("Welcome to Promises");
        },1000);
    });
}
const messagePromise = getWelncomeMessage();

console.log("Promise created. Result not ready yet.");

messagePromise.then(function(message){
    console.log(message);
});

console.log("Program continues while the promise is pending.");