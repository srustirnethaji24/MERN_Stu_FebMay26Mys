// Understanding the Event loop
console.log("1. Synchronous task started");

// setTimeout schdules a callback gor later.
setTimeout(() =>{
    console.log("3. Timer callback executed.");
},0);

console.log("2. Synchronous task finished.");