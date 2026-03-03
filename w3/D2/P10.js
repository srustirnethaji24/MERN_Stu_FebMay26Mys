// Callback function
// it is a func which is passed as an argument 
//to another function

function greetUser(name, Callback){
    console.log("Hello,",name);
    Callback();
}
greetUser("Srusti",function(){
    console.log("callback function executed");
});