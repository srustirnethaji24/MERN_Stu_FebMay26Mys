//Loggging 

console.log("Console logging");

console.log("Warning message");

console.log("Error message");

let users = [
    {id:1,name:"sru"},
    {id:2,name:"spo"},
];

console.log(users);
console.table(users);

//Group related logs
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// measure execution time
console.time("loopTimer");
for(let i =0;i<1000 ; i++){}
console.timeEnd("loopTimer");