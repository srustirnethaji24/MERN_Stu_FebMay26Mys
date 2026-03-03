// Higher order function
// 1. A function which takes another functions as parameter
//or
// 2. a func returns another func

function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double = createMultiplier(2);
console.log("double(10):",double(10));
let triple = createMultiplier(3);
console.log("triple(30):",triple(30));