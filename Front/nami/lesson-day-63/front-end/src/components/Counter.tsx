import React, { useState } from 'react';

export default function Counter(): React.ReactElement {
  const [counter, setCounter] = useState(0);
  function decrement() {
    setCounter(counter - 1);
  }
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
