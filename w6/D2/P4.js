// Using the EventEmitter Class
const EventEmitter = require("events"); //npm install lodash

//Create a new event emitter instance
//this object can publish events and allow listeners to subscribe

const orderEmitter = new EventEmitter();

// Register a listener for the "orderPlaced" event. 
// Whenever the event is emitted , the function will execute.
//once() registers a listener thst automatically removes itself after running for the first time.
orderEmitter.once("OrderPlaced",
    function(orderId,customerName,ordervalue,Place){
        console.log("Hello",customerName);
        console.log("Bill amount:",ordervalue);
        console.log("orderlocation:",Place)
        console.log("Waiting for restaurant to accepted order.",orderId);
    }
);
orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Restaurant accepted order.",orderId);
    }
);
orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Assigning Delivery partner....");
    }
);
orderEmitter.on("OrderPlaced",
   function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Lokesh is delivering your order.",orderId);
    }
);

//Emit the event with extra data
//The listener receives the OrderId value.
orderEmitter.emit("OrderPlaced","ORD-24080408","Srusti",1000,"mysore,vidyanagar");
orderEmitter.emit("OrderPlaced","ORD-24080408","Srusti",1000,"mysore,vidyanagar");