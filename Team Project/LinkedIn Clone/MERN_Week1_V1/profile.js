const user = require("./user");
const chalk = require("chalk");

function editProfile(rl,callback){
    const currentUser = user.getcurrentUser();
    if(!currentUser){
        console.log("\n Create Profile First\n");
        return callback();

        
    }
    console.log("\n================================\n");
    console.log("1. Add Skill");
    console.log("2. Add Experience");
    console.log("3. Add Education");
    rl.question("Enter your choice :",(choice)=>{
        switch(choice){
            case "1":
                rl.question("Enter Your skill: ",(skill)=>{
                    currentUser.skills.push(skill);
                    console.log(chalk.green("Skill added sucessfully"));
                    callback();
                    
                });
                break;
            case "3":
                rl.question("Enter Your Education:  ",(education)=>{
                    currentUser.education.push(education);
                    console.log(chalk.green("Education added sucessfully"));
                    callback();
                    
                });
                break;
            case "2":
                rl.question("Enter Your Experience: ",(experience)=>{
                    currentUser.experience.push(experience);
                    console.log(chalk.green("Experience added sucessfully"));
                    callback();
                });
                break; 
            default:
                console.log(chalk.red("\nInvalid choice\n"));
                callback();
                  
        }
    });
}
module.exports = {
    editProfile
};
