// IIFE
//without parameters
(function(){
    console.log("Basic IIFE executed Immediately");
})();

//with parameters
(function(appName,version){
    console.log("App:",appName,"versionn:",version);
})("NodeJs","V22.22.0");

//with return value
const result = (function(){
   const a =10 , b=20;
   return a+b;
})();
console.log("Sum is:",result);
