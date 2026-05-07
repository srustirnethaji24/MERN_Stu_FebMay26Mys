// Common form patterns
// Controlled component

import { useState } from "react";

// A form input whose values is controlled by the React state
export function FormsPattern()
{
    const [name, setName] = useState('');
    const [submittedName, setSubmitedName] = useState('');

    // input handler
    const handleChange = (event => {
        setName(event.target.value);
    });
    // form submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitedName(name);
    };
    return (
        <section>
            <h2>Form Pattern</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name}
                onChange={handleChange} placeholder="Enter your name" />
                <button type="submit">Submit</button>
            </form>
            <p>You've Typed the name as: {name}</p>
            <p>Submitted: {submittedName}</p>
        </section>
    );
}