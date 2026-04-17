const chalk = require("chalk");
const user = require("./user");
function loginProfile(rl,callback){
    const users = user.getAllUsers();
    if(users.length==0){
        console.log(chalk.yellow("First Create User"));
        return callback();
        
    }
    console.log("\n Login Profiles");

    users.forEach((singleUser,index)=>{
        console.log(`${index+1}.${singleUser.name}`);
        
    });
    rl.question("\n Enter Your Profile Number To Login : ",(choice)=>{
        const index = Number(choice)-1;
        if(index>=0 && index<users.length){
            user.setcurrentUser(users[index]);
            console.log(chalk.green(`Logged in as ${users[index].name}\n`));

            
        }else{
            console.log(chalk.red("\n Invalid choice \n"));
            
        }
        callback();
    })
}
module.exports = {
    loginProfile
};
