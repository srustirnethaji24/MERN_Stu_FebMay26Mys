// throw custom errors
// function divide(a,b){
//     if(b==0) {
//        throw new error ("Cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//     console.log(divide(10,2));
//     //  console.log(divide(10,0));
//  }
// catch(err){
//     console.log("Caught:",err.message);
// }

// function checkage(age){
//     if(age<18) {
//        throw new error ("Age must be 18 and above");
//     }
//     console.log("You can vote")
//     return age;
// }
// try{
//     console.log(checkage(10));
//     // console.log(checkage(20));
//  }
// catch(err){
//     console.log("Caught:",err.message);
// }

//create a custom error class
class validationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function createUser(name){
    if(!name){
        throw new validationError("Name is required");
    }
    console.log("hi,"+name+"welcome")
    return {name};
}
try{
    // createUser("");
    createUser("spoo");
}
catch (err){
    console.log(err.name +":",err.message);
}