// Writting custom callback functions  

function ProcessStudent(name,score,callback,monkey){
    console.log("Student name: ",name);
    console.log("Score: ",score);

    callback(name,score);
    monkey(name,score);
}
function showResult(name,score){
    if(score >=70){
        console.log(name+ " has passed.");
    }else{
        console.log(name+ " has failed."); 
    }
}
function showGrade(name,score){
    if(score >=85){
        console.log("A+");
    }
    else if(score >= 75){
        console.log("Grade: A");
    }
     else if(score >= 70){
        console.log("Grade: B");
    }
    else{
        console.log("Grade: fail"); 
    }
}


ProcessStudent("loki",86,showGrade,showResult);
// ProcessStudent("loki",85,showGrade);