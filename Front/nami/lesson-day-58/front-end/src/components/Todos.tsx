import React from 'react';

function Todos(): React.ReactElement {
  return (
    <>
      <img src="/todos.jpg" alt="Profile image" />
      <ul
        style={{
          backgroundColor: 'black',
          color: 'pink',
        }}
      >
        <li>do my homework</li>
        <li>Drink my medicine</li>
        <li>relax</li>
      </ul>
      ;
    </>
  );
}
export default Todos;
