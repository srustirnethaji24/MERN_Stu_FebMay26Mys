// Array basics
console.log("Array basics");
// creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null, {name:"gola"},[5,6]];
console.log(mixedArray);
console.log(numArray);
console.log(emptyArray);


//using constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an Array?",Array.isArray(fruits));

//push :add
fruits.push("cherry");
console.log(fruits);

//push :remove
fruits.pop();

//unshift :adds to beginning
fruits.unshift("Orange");
console.log(fruits);

//shift:remove from beginning
fruits.shift();
console.log(fruits);
