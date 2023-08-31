'use client'
import { useRef } from "react";

export default function InputRef(){
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }

    console.log({inputRef})

    return (
        <>
        <input ref={inputRef} />
        <button onClick={handleClick}>
          Focus
        </button>
      </>
    )
}