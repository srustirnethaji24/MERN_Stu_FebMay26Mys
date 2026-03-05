// Array map
let prices = [100,200,300,400];

let priceWithGST = prices.map(price => price + price*0.18);
console.log("price w/o tax:", prices);
console.log("price with tax:", priceWithGST);

// using map to extract files
let users = [
    {name:"lokesh",age:21},
    {name:"krishna",age:25}
];

let names = users.map(user => user.name);
console.log("",names);
