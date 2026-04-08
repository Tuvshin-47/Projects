import Counter from './components/Counter';
import CounterUseReduce from './components/CounterUseReduse';
import { Profile } from './components/Profile';
import PropsDrilling from './components/PropsDrilling';

function App() {
  return (
    <>
      <h1>lesson-day-63</h1>
      <h2>UseReduceHook</h2>
      <Counter />

      <h3>Counter Use Reduce Hook</h3>
      <CounterUseReduce />
      <h2>Props drilling</h2>
      <PropsDrilling />
      <h2>Use Context / Provider Example</h2>
      <Profile />
    </>
  );
}

export default App;
