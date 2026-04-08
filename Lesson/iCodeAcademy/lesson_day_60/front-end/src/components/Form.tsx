import React, { useState } from "react";

export const Form = (): React.ReactElement => {

    // state variable, state change болгодог функц, useState hook дотор initial state буюу эхний төлөв
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1>My Register Form</h1>
            <form>
                <label htmlFor="username">
                    <input type="text" value={userName} placeholder="Username" id="username" onChange={(e) => {
                        console.log(e.target.value);
                        setUserName(e.target.value);
                    }} />
                </label>
                <br />
                <label htmlFor="email">
                    <input type="email" value={email} placeholder="Email" id="email" onChange={(e) =>{
                        console.log(e.target.value);
                        setEmail(e.target.value);
                    }} />
                </label>
                <br />
                <label htmlFor="password">
                    <input type="password" value={password} placeholder="Password" id="password" />
                </label>
            </form>
            <div>
                <span>{userName}</span>
                <br />
                <span>{email}</span>
            </div>
        </>
    )
}