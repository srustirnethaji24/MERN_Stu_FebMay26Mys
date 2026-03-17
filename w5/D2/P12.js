// Chaining promise with centralized error handling
function validateLogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login validated");
        },400);
    });
}
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountfound = true;
            if(accountfound){
                resolve("Account data loaded.")
            }else{
                reject("Account data could not be found");
            }
        },700);
    });
}
validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountmessage){
    console.log(accountmessage);
})
.catch(function(error){
    console.log("Chain error:",error);
});