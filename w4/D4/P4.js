const out = document.getElementById("out");

function explain(code){
    if(code === 1)return "Permission denied";
    if(code === 2)return "Permission unavailable";
    if(code === 3)return "Permission timed out";
    return "Unknown error";
}
document.getElementById("locateBtn").addEventListener("click",function(){
    if(!navigator.geolocation){
        out.textContent = "Geolocation is not Supportes in this Browser"
    }
    out.textContent = "Requesting current location ...";

    navigator.geolocation.getCurrentPosition(
    function(position){
        const data = {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude,
            accuracy : position.coords.accuracy
        };
        console.log(data);
        out.textContent = JSON.stringify(data,null,2);
    },
    function(error){
        out.textContent = "Error code:" +error.code+
        explain(error.code)+ "Message:" +error.message;
    },
    {enableHighAccurancy: true,timeout:10000,maximumAge:0}
);
});