/*
=========================================================
SPRINT 1 – CORE APPLICATION BOOTSTRAPPING


TOPICS COVERED:


✓ React 18 Root API
✓ BrowserRouter
✓ Global CSS Import


WHY THIS FILE?


This is the true entry point of the application.


Responsibilities:


index.html
↓
main.jsx
↓
BrowserRouter
↓
App
↓
Entire React Application


Without BrowserRouter:


✓ Routes won't work
✓ Navigation won't work
✓ Protected Routes won't work


=========================================================
*/


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import App from "./App";
import "./index.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(


  <React.StrictMode>


    {/*
      BrowserRouter listens to:


      • Current URL
      • Browser Back
      • Browser Forward


      and synchronizes React Router
      with the browser.
    */}


    <BrowserRouter>


      <App />


    </BrowserRouter>


  </React.StrictMode>


);


/*
=========================================================
VERIFICATION


✓ React 18 compatible
✓ Vite compatible
✓ React Router compatible
✓ Global CSS imported
=========================================================
*/

// src/main.jsx


/*
=========================================================
SPRINT 2 – AUTH PROVIDER INTEGRATION


TOPICS COVERED:


✓ BrowserRouter
✓ Global Providers
✓ Context Provider Composition


WHY THIS FILE?


Providers should wrap the application once.


BrowserRouter
↓
AuthProvider
↓
Entire Application


This allows every component to access:


✓ Routing
✓ Authentication


=========================================================
*/


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import App from "./App";


import "./index.css";


import { AuthProvider } from "./context/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);


/*
=========================================================
APPLICATION TREE


BrowserRouter
↓
AuthProvider
↓
App
↓
Pages
↓
Components


=========================================================


KEY TAKEAWAYS


1. Providers should live near the root.


2. Auth becomes globally available.


3. Components don't require prop drilling.


=========================================================
*/
