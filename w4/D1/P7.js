//getElementById
console.log("Document object:", document);
console.log("Page title", document.title);

// const heading = document.getElementById("mainHedaing");
// console.log("Heading text",heading.textContent);

//get ElementByClassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

//getElementByTagName
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "red";
    }

    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "lightgreen";
        //Query selector:returns the first element matching a css selector
    const mainFirstHeading = document.querySelector(".mainHeading");
    mainFirstHeading.style.color = "red";
    }
    
});

//Query selector all: returns all the elements matching the selector
const task = document.querySelectorAll(".task");
// task.style.color = "yellow";
tasks.forEach(function(task){
    task.style.color = "yellow";
})
   
