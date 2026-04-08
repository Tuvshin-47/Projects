import React, { useEffect, useRef } from "react";

export function AutoFocusInput() {

    useEffect(() => {
        document.querySelector('input')?.focus() // not recommended
        console.log('hi');
    }, [])


    return (
        <div>
            <input type="text" placeholder="This won't be focused" />
        </div>
    )
}

export function FocusInput() {
    const inputRef = useRef<any>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    }


    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus the Input</button>
        </div>
    )
}