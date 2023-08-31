'use client'
import { useEffect, useState } from "react";

export default function UseEffectExample(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        // const intervalId = setInterval(() => {
        // setCount(c => c + 1);
        // }, 1000);

        // return () => clearInterval(intervalId);
    }, []); // What happens when you put count in the dependency array?

  return <p>{count}</p>
}