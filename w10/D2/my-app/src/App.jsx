import './App.css'
import { UseContextIntro } from "./components/P1";
import { useDocumentTitle } from './components/P2';
import { CustomHooksIntro} from "./components/P2";
import { UseRefIntro } from "./components/P3";
import { UseReducerIntro } from "./components/P4";
import { UseCallbackIntro } from "./components/P5";
function App() {
  return (
    <>
      {/* <UseContextIntro /> */}
      {/* <CustomHooksIntro /> */}
      {/* <UseRefIntro /> */}
      {/* <UseReducerIntro /> */}
      <UseCallbackIntro />
    </>
  )
}
export default App