// useCallback hook
// Memoizes a function
// It keeps the same function reference across renders
//  util dependency changes
import { useCallback,useState, memo } from "react";
const ChildComponent = memo(function ChildComponent({ onClick ,label }) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
});

export function UseCallbackIntro() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');
    
    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    },[]);
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <section>
            <h2>UseCallback Intro</h2>
            <p>Theme: {theme}</p>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleIncrement} label="Increment Count" />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </section>
    );
}