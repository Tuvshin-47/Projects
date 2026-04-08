import React from "react";

// user type тодорхойлно уу
interface User {
    name: string
}

export const PropsDrilling = (): React.ReactElement => {
    const user: User = { name: "Tuguldur" };
    return <Header user={user} />;
}
type UserProps = {
    user: User
}
// props - properties, function parameter
const Header = ({ user }: UserProps) => {
    return (
        <NavBar user={user} />
    )
}

const NavBar = ({ user }: UserProps) => {
    return (
        <UserMenu user={user} />
    )
}

const UserMenu = ({ user }: UserProps) => {
    return <div>Hello, {user.name}</div>
}