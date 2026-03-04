// Nested Objects and Method
const student = {
    firstName: "Spoorthi",
    lastName:"srusti",
    scores:{
        math:80,
        science:83
    },
    hobbies:["dancing","singing"],
    fullname:function(){
        return this.firstName + " " +this.lastName;
    },
    greet(){
        console.log("hi,",this.fullname());
    }
};
console.log(student.fullname() );