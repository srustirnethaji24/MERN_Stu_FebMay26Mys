let users = [];
let CurrentUser = null;

function Createprofile(rl,callback){
    rl.question("enter your name :",(name)=>{
        rl.question("enter your headline:",(headline)=>{
            const user = {
                id : Date.now(),
                name:name,
                headline:headline,
                skills:[],
                education:[],
                experience:[],
                connections:[],
            };
            users.push(user);
            CurrentUser=user;
            console.log("profile crated sucessfully \n");
            callback();
            
        });
    });
}
function viewMyProfile(callback){
    if(!CurrentUser){
        console.log("no profile found create profile first.\n");
        return callback;

        
    }
    console.log("\n My profile");
    console.log("Id",CurrentUser.id);
    console.log("Name",CurrentUser.name);
    console.log("Headline",CurrentUser.headline);
    console.log("Skills",CurrentUser.skills.join(",")||"NONE");
    console.log("Education",CurrentUser.education.join(",")||"NONE");
    console.log("Experience",CurrentUser.experience.join(",")||"NONEs");
    console.log("Connections",CurrentUser.connections.length);
    console.log("======================================================\n");
    callback();
}
function viewOtherFile(callback){
    const otherUsers = users.filter((user)=>{
        return CurrentUser ?user.id!==CurrentUser.id:true
    });
    if(otherUsers.length===0){
        console.log("\n no other profile created\n");
        return callback();
        
    }
    console.log("other profiles");
    otherUsers.forEach((user,index)=>{
        console.log(`${index+1}.${user.name}-${user.headline}`);
        
    });
    console.log();
    callback();
    
    
}
function getCurrentUser(){
    return CurrentUser;
}
function getAllUsers(){
    return users;
}
module.exports = {
    Createprofile,
    viewMyProfile,
    viewOtherFile,
    getCurrentUser,
    getAllUsers
};