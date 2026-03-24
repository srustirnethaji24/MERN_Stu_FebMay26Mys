// How JS handles asynchronous tasks in node.js
function fetchReport(callback){
    console.log("Fetching input data...");

    setTimeout(() => {
        const report = "Monthly report is ready"; // using this synchronous convert to asynchronous 
        callback(report);
    },1000);
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
});
console.log("Application continues to execute further");