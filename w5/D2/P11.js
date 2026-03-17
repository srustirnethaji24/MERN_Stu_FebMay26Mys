// Chaining Promises with returned promises
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}
function getOrderDetails(OrderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:OrderId,
                product: "Laptop",
                quantity: 2
            });
        },700);
    });
}
getOrderId()
.then(function(OrderId){
    console.log("Order Id received:",OrderId);
    return getOrderDetails(OrderId);
})
.then(function(OrderDetails){
    console.log("Order detailes loaded.");
    console.log("Product:",OrderDetails.product);
    console.log("Quantity:",OrderDetails.quantity);
});