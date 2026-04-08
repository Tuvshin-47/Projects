import React from 'react';

interface User {
  name: String;
}
const PropsDrilling = () => {
  const user: User = { name: 'Tuguldur' };
  return <Header user={user} />;
};

type UserProps = {
  user: User;
};

const Header = ({ user }: UserProps) => {
  return <NavBar user={user} />;
};

const NavBar = ({ user }: UserProps) => {
  return <UserMenu user={user} />;
};
const UserMenu = ({ user }: UserProps) => {
  return <div>Hello,{user.name}</div>;
};
export default PropsDrilling;
