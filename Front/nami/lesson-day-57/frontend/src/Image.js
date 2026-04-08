import React from 'react';

function Image() {
  return (
    <div>
      <style>{'h1{color:red;}'}</style>
      <h1>This is Image Component</h1>
      <img
        style={{ width: '100px', height: '100px' }}
        src="./img/test.png"
        alt=""
      />
    </div>
  );
}

export default Image;
