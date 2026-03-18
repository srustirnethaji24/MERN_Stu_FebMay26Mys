// An async function always returns a promise 
async function getStatusMessage() {
    return "Order is ready";
}
const result = getStatusMessage();

console.log("Is theis returned value a promise",result instanceof Promise);

result.then(function(message){
    console.log("Resolved value:",message);
});