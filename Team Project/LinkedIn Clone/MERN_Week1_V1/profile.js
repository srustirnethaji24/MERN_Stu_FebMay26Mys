const user = require("./user");
function editProfile(r1,callback){
    const CurrentUser = user.getCurrentUser();
    if(!CurrentUser){
        console.log("\n Create profile First\n");
        return callback();

        
    }
    console.log("\n================================\n");
    console.log("1. Add Skill");
    console.log("2. Add Experience");
    console.log("3. Add education");
    r1.question("enter your choice :-",(choice)=>{
        switch(choice){
            case "1":
                r1.question("enter your skill",(skill)=>{
                    CurrentUser.skills.push(skill);
                    console.log("skill added sucessfully");
                    callback();
                    
                });
                break;
            case "3":
                r1.question("enter your education",(education)=>{
                    CurrentUser.education.push(education);
                    console.log("education added sucessfully");
                    callback();
                    
                });
                break;
            case "2":
                r1.question("enter your education",(experience)=>{
                    CurrentUser.experience.push(experience);
                    console.log("education added sucessfully");
                    callback();
                });
                break; 
            default:
                console.log("\ninvalid chice\n");
                callback();
                  
        }
    });
    
    
    
    

}
module.exports = {
    editProfile
};