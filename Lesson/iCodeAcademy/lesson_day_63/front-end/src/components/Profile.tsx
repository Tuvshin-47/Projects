import React from "react";
import UserContext from "./UserContext";
import { Header } from "./Header";

interface User {
    name: string
}

export function Profile(): React.ReactElement {
    const user: User = { name: "Tuguldur" };

    return (
        <UserContext.Provider value={user}>
            <Header />
        </UserContext.Provider>
    )
}