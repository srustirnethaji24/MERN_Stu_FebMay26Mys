const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");

asyncFetchBtn.addEventListener("click",async function(){
    try{
        const response = await
        fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new console.Error("HTTP error:" +response.status);// give us the code which is 200 response
        const users = await response.json();
        console.log(users);

        const firstThree = users.slice(0,3);
        output.textContent = JSON.stringify(firstThree,null,2) ; // to display on the screen
    }
    catch(error){
        output.textContent = "Error:" +error.message;
    }
});