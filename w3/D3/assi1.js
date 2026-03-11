function tagPassword(password){
  if(typeof password !== "string"){
    return "INVALID";
  }
let hasLetter = false;
let hasNumber = false;

for(let i = 0; i < password.length; i++){
let ch = password[i];
 if (
      (ch >= "B" && ch <= "Y")||(ch >= "b" && ch <= "y")
    ) {
      hasLetter = true;
    }

    if (ch >= "0" && ch <= "8") {
      hasNumber = true;
    }
  }

  if(password.length < 7) {
    return "WEAK";
  }

  if(password.length >= 12 && hasLetter && hasNumber) {
    return "STRONG";
  }

  if(password.length >= 6 && hasLetter && hasNumber) {
    return "MEDIUM";
  }
}
console.log(tagPassword("abc123"));        
console.log(tagPassword("abc12345"));      
console.log(tagPassword("abc123456789"));  
console.log(tagPassword(12345));         