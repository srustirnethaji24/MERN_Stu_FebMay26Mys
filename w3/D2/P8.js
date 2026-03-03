// Default parameters
function product (a=1,b=2) {
    return a*b;
}
 console.log("Product of 15 and 4",product(15,4));
 console.log("Product of 15",product(15));
 console.log("Product of 4",product(4));

//  Rest parameters
function sumofAll(...numbers){
    console.log(...numbers);
}
sumofAll(1,2,3);
sumofAll(10);