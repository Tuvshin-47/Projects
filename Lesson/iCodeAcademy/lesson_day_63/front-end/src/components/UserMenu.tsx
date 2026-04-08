import React, { useContext } from "react";
import UserContext from "./UserContext";

export function UserMenu() {
    const user = useContext(UserContext);
    return (
        <div>Hello, {user.name}</div>
    )
}