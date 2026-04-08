import React, { useReducer } from 'react';

interface State {
  count: number;
}
// interface Action {
//   type: string;
// }
type Action =
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    };

export const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
  }
};
const CounterUseReduce = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};

export default CounterUseReduce;
