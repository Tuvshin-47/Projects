import { arrayForEach } from './DataStructure/array-foreach';
import { arrayReduce } from './DataStructure/array-reduce';
import { arraySort } from './DataStructure/array-sort';

function App() {
  arraySort();
  arrayForEach();
  arrayReduce();
  return (
    <>
      <h1>Lesson-day-66 , Sort, Reduce , for each</h1>
      <h2>arraysort</h2>
    </>
  );
}

export default App;
