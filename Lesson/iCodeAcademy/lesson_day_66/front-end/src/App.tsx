import { arrayForEach, differenceArrayMethods } from "./datastructure/array-foreach";
import { arrayReduce } from "./datastructure/array-reduce";
import { arraySort } from "./datastructure/array-sort"


function App() {

  arraySort();

  arrayForEach();

  differenceArrayMethods();

  arrayReduce();
  
  return (
    <>
      <h1>Lesson Day 66 - Sort, Reduce, ForEach</h1>
      <div>
        <h2>Array Sort</h2>

      </div>
    </>
  )
}

export default App
