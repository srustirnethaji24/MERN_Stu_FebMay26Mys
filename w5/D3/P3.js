// Handling errors with try/catch

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;

        if(isServiceAvailable){
            resolve("Sucess! Customer profile loadeded.");
        }
        else{
            reject("unsucessfull! Customer profile Unavailable.");
        }
    });
}
async function showCustomerProfile(){
    try{
    const message = await loadCustomerProfile();
    console.log(message);
    }
    catch(error){
        console.error("Error:",error);
    }
    
}
showCustomerProfile();