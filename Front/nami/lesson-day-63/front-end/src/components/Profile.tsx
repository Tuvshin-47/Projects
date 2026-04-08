import React, { use } from 'react';
import UserContext from './UserContext';
import { Header } from './Header';

interface User {
  name: string;
}

export function Profile() {
  const user = { name: 'Tuguldur' };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}
