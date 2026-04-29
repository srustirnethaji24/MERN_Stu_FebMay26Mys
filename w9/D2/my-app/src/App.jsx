import { useState } from 'react'
import './App.css'
import { FunctionName } from "./components/FunctionalCompOne.jsx"
import { FunctionalComponentsBasics } from "./components/FunctionalComponentsBasics.jsx";
import { ClassComponentsBasics } from "./components/ClassComponentBasics.jsx"
import { FunctionComp } from "./components/FunctionalComponentsAdv.jsx"
import { ClassComponentState } from "./components/ClassComponentState";
function App() {
  return (
    // Fragment in react : <> </>
    <>
        {/* Component name */}
      {/* <FunctionName /> */}
      {/* <FunctionalComponentsBasics /> */}
      {/* <ClassComponentsBasics /> */}
      {/* <FunctionComp /> */}
      <ClassComponentState />
    </>
  )
}
export default App