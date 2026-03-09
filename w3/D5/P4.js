const input = document.getElementById("nameinput");
const display = document.getElementById("display");

input.addEventListener("keydown",function(event){
    console.log("key pressed:",event.key);
    display.textContent= "Last key pressed:" +event.key;
});