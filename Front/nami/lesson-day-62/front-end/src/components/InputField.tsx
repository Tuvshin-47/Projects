import React, { useEffect, useRef } from "react";


export function AutoFocus(){

    useEffect(()=>{
        document.querySelector("input")?.focus()
        console.log("hi");
    },[])
    
    return (
        <div>
            <input type="text"  placeholder="This wont be focused"/>
        </div>
    )
}

export function FocusInput(){
    const inputRef = useRef<any>(null);
    const focusInput =()=>{
        inputRef.current?.focus();
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus the Input</button>
        </div>
    )
}