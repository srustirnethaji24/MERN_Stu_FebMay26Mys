// why use of asyn/await
function getUser(){
    return new Promise(function(resolve,){
        setTimeout(function(){
            resolve({id:101,name:"spoo"});
             //resolve :sucessfully compliation
        },1000);
    });
}

function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["Order=A","Oredr-B"]);
        },12000);
    });
}

async function showUserAndOrders(){
    const user = await getUser();
    console.log("User loadede: ", user);

    const orders = await getOrders(user.id);
    console.log("orders loadede", orders);
}
showUserAndOrders();