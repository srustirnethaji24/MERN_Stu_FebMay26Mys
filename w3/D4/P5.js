// Reduce method
let nums = [5,10,15];

let total = nums.reduce((intermediateSum,current) => intermediateSum+current,0);
let avrg = total/nums.length;
//console.log(total);
//console.log(avrg);

//Reduce to object count by category 
let items =["pen","pencil","pen","eraser"];
let count = items.reduce((intermediatevalue,items)=>{
    intermediatevalue[items] = (intermediatevalue[items] || 0)+1;
    return intermediatevalue;
},{});
console.log("Item count:",count);