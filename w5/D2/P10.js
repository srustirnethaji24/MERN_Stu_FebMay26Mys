// Chanining Promises with returned values
function getBaseAmount(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1000);
        },500);
    });
}
getBaseAmount()
.then(function(amount){
    console.log("Base amount:",amount);
    return amount+200;
})
.then(function(updatedAmount){
    console.log("Amount After service charge:",updatedAmount);
    return updatedAmount-500;
})
.then(function(finalAmount){
    console.log("Final Amount after Discount:",finalAmount);
});