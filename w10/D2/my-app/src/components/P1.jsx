// useContext hook
// Context : Lets you share the date b/w components
//  Without passing props manually through every level
import { createContext, use, useContext, useState } from "react";
// Why to useContext?
// 1. Helps us avoid prop drilling
// 2. Useful for shared values:
    // - theme details
    // - logged-in user details
    // - language settings
    // - app settings 
//  Basic steps
// 1. Create a context
// 2. Wrap components with Provider
// 3. Read value using useContext()

// 1. Create a context
const ThemeContext =createContext();

// Child Components 1
function Header(){
    const theme = useContext(ThemeContext);
    return (
        <header  style={{
            padding: '20px',
            marginTop:'20px',
            background: theme === 'dark' ? '#222' : '#eee' ,
            color: theme === 'dark'? '#fff' : '#000',
        }}>  
        <h3> Header Component</h3>
        <p>Current theme from context :{theme}</p>
        </header>
    );
}
//  Child component 2
function Content (){
    const theme = useContext(ThemeContext);
    return(
        <div style={{
            padding: '20px',
            marginTop: '20px',
            background: theme === 'dark' ? '#333' : '#f9f9f9' ,
            color: theme === 'dark'? '#fff' : '#000',
        }}>
            <p> This Component also uses the same context value</p>
        </div>
    );
}
function Layout (){
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
}
export function UseContextIntro (){
    // Shaed state
    const [theme,settheme] = useState('light');

    const toggleTheme = () => {
        settheme(theme === 'light' ? 'dark' : 'light');
    };
    return(
        <section>
            <h2> useContext exapmle via theme</h2>    
            <p> 
                Example to show the usage of context sharing
            </p>   
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <ThemeContext.Provider value ={theme}>

            </ThemeContext.Provider>
         </section>
    )
}