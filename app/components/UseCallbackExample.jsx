'use client';
import { useCallback } from "react";

function expensiveWork(text){
    for (let i = 0; i < 10000; i++){
        console.log(text)
    }
    return text
}

export default function UseMemoExample(){
    const text = 'hey'
    const memoizedFunction = useCallback(expensiveWork, [text])

    const textFromFn = memoizedFunction(text)

    return <p>{textFromFn}</p>
}