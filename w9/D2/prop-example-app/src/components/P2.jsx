// Props destructuring
//a syntax of es6 approach that allows us to unpack propertics from props object directally into the values.
import {React}  from "react";
//child component
function UserProfile({username,skill}){
    return(
        <div>
            <p>User:{username}</p>
            <p>Skill:{skill}</p>
        </div>
    )
};
//parent component
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile username="Srusti" skill="React" />
        </>
    )
}