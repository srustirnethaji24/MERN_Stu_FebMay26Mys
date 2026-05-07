// useEffect for side effects.
// Side Effects: are things your componet does outside of rendering UI.
// Fetching data from API or updating the DOM.
// Setting up subscriptions.

import {useState , useEffect, use} from "react";
export function  UseEffectBasics(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Guest');

    useEffect(() => {
        console.log('useEffect runs once');
        document.title = `React useEffect example - Welcome ${name}`;

        return() => {
            document.title = 'React useEffect';
        };
    },[]);

    // DOM updation based on state
    useEffect(() => {
        console.log(`Count Changed to $(count)`);
    },(count));

    // No Dependency array
    useEffect (() => {
        console.log('Runs after every render');
    });

    const increment = () => setCount(count + 1);
    const updateName = (e) => setName(e.target.value);

    return(
        <>
            <input value = {name}
            onChange={updateName}
            placeholder="Enter Your Name" />
            <button onClick={increment}>Count : {count}</button>
            {`useEffect(() => {
                console.log('Run Once');
                },[]);`}
        </>
    )
}