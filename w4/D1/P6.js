// // finally 
// function example(){
//     try{
//         console.log("example in try block");
//         return"TRY_RETURN";
//     }
//     finally{
//         console.log("this is printed!");
//     }
// }
//  console.log("example result:",example());


// Return in catch block and still not finally
function example1(){
    try{
        try{
        throw new Error("new error");
    }
    catch(e){
        console.log("Example 1: caught error");
        return 10;
        // throw(e);
    }
    finally{
        console.log("Example 1:finally still run",)
    }
  }
  catch(e){
    console.log("Example 1 outer catch",e.message);
  }
  }
console.log("Example 1:", example1());