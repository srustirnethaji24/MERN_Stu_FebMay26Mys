// callback error 
function dividedNumbers(a,b,callback){
    if(b==0){
      callback("Cannot divided by zero.",null)
    result;
    }
    const result = a/b;
    callback(null,result);
}
dividedNumbers(10,2,function(error,result){
    if(error){
        console.log("Error:", error);
        return;
    }
    console.log("Result: ",result);
});