import { useState } from "react"
import "./UpDownCounter.css"

export default function UpDownCounter(){
    const [counter, setCounter] = useState(0);
    let thirty = 30;
    return (
        <div className="UpDownCounter">
            <button onClick={() => {setCounter((prv) => prv+1)}}>Up</button>
            <p>{counter}</p>
            <button onClick={() => {setCounter(counter-1)}}>Down</button>
        </div>
    )
}