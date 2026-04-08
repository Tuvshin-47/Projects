import React, { useState } from "react";


export default function Counter(): React.ReactElement {

    const [counter, setCounter] = useState(0);

    // decrement - function expression arrow function
    const decrement = () => {
        setCounter(counter - 1);
    }
    
    // increment function declaration
    function increment() {
        setCounter(counter + 1);
    }

    function multiplyByTwo(){
        setCounter(counter * 2);
    }
    return (
        <div>
            <p>Count: {counter} </p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}