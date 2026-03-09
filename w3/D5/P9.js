const onceBtn = document.getElementById("onceBtn");

//limiting listener to once only for event
onceBtn.addEventListener("click",function(){
    console.log("This click listener works onnly once.");
},{once:true});

// Global keyboard shortcut creation
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLowerCase()==="s"){
        event.preventDefault();
        console.log("Custom ctrl+s shortcut trigged");
    }
});