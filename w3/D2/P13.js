// Function scop
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    // console.log(insideVar);
    // console.log(insideLet);
    // console.log(insideConst);
    
}
scope();
//  console.log(insideVar);
//     console.log(insideLet);
//     console.log(insideConst);

function varfunctionscope(){
    if(true){
        var x = 40;
        let y = 50;
         console.log("y:",y);
    }
    console.log("x:",x);
   
}
 varfunctionscope();