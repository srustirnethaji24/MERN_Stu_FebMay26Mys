const livepassword = document.getElementById("livepassword");
const message = document.getElementById("message");

livepassword.addEventListener("input",function(){
    //Password validation
    const password = livepassword.value;
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }
    //check length of the password
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }
    //check password has UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must contain atleast 1 UPPERCASE character.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }
    //check password has LOWERCASE characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must contain atleast 1 LOWERCASE character.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }
    //check number 
    if(!/\d/.test(password)){
        message.textContent = "Password must contain atleast 1 digit in it.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }
    //chech special characters
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must contain atleast 1 special character in it.";
        message.style.color = "red";
        livepassword.focus();
        return;
    }

    message.textContent = "Valid  password entered";
    message.style.color = "green";
    console.log("Success!",{email,password});
})