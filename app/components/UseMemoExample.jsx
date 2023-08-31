'use client';
import { useMemo } from "react";

function expensiveWork(text){
    for (let i = 0; i < 100000; i++){
        console.log(text)
    }
    return text
}

export default function UseMemoExample(){
    const text = 'hey'
    const memoizedText = useMemo(() => expensiveWork(text), [text])
    return <p>{memoizedText}</p>
}