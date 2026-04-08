import Counter from "./components/Counter"
import CounterUseReduce from "./components/CounterUseReduce"
import { Profile } from "./components/Profile"
import { PropsDrilling } from "./components/PropsDrilling"

function App() {

  return (
    <>
      <h1>Lesson Day 63</h1>
      <h2>useReduce Hook</h2>
      <Counter />
      <h2>Counter with useReducer</h2>
      <CounterUseReduce />
      <h2>Props Drilling</h2>
      <PropsDrilling />
      <h2>useContext Context/Provider Example</h2>
      <Profile />
    </>
  )
}

export default App
