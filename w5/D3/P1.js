// Introduction to Asyn/Await
function getMessage(){
    return new Promise(function(monkey){
        setTimeout(() =>{
            monkey("Asyn/await makes promis based code easier to read");
        },1000);
    });
}
async function showMessage(){
    console.log("Loading message...");
    const message = await getMessage();
    console.log(message);
}

showMessage();