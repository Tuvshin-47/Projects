import React from 'react';

const person = {
  name: 'Gregorio Y.Zara Todos',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

export default function Ex01(): React.ReactElement {
  return (
    <>
      <div className="theme" style={person.theme}>
        <div>{person.name}</div>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="" />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}
