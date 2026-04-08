import React, { useState } from 'react';

export const Form = () => {
  // state varieble , state change bolgodog funkts,useState hook dotor initial state buyu ehnii tuluv

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>My Register form</h1>
      <form>
        <label htmlFor="userName">
          <input
            type="text"
            value={userName}
            placeholder="User Name"
            id="username"
            onChange={(e) => {
              console.log(e.target.value);
              setUserName(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            type="email"
            value={email}
            placeholder="Email"
            id="email"
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={password}
            placeholder="password"
            id="password"
          />
        </label>
      </form>
      <div>
        <span>{userName}</span>
        <br />
        <span>{email}</span>
      </div>
    </>
  );
};
