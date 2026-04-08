import { AutoFocusInput, FocusInput } from "./components/InputField"
import PackingList from "./components/Item"
import List, { Chemists } from "./components/RenderingList"

function App() {

  return (
    <>
      <h1>Lesson Day 62</h1>
      <h2>Conditional Rendering</h2>
      <PackingList />

      <h2>Rendering List</h2>
      <List />
      <h2>Chemists</h2>
      <Chemists />

      <h2>UseRef Access to DOM from Virtual DOM of React</h2>
      <AutoFocusInput />

      <h2>Focus Input</h2>
      <FocusInput />

    </>
  )
}

export default App
