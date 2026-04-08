import { AutoFocus, FocusInput } from "./components/InputField"
import PackingList from "./components/Item"
import List, { Astro, Chemists, Mathematician, Physicist } from "./components/RenderingList"

function App() {

// useRef ashiglah ni domtoi holbogdoj bn gsen ug
  return (
    <>
    <h1>Lesson day 62</h1>
    <h2>Conditional Rendering</h2>
    <PackingList/>
    <h2>Rendering List</h2>
    <List/>
    <Chemists/>
    <Mathematician/>
    <Physicist/>
    <Astro/>
    <h2>UseRef Access tp dpm from virtual dom of React</h2>
    <AutoFocus/>
    <FocusInput/>

    </>


    
  )
}

export default App
