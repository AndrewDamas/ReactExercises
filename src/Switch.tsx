import React from "react";
import './Switch.css';
import { useState } from "react";

function Switch(){
    const[onOff, setSwitch] = useState("Off")
    return <div className={onOff ==="On"? "Switch On": "Switch"}>
            <h3>Switch</h3>
            <p>{onOff}</p>
            <div>
                { onOff === "Off" ?
                <button onClick={function(){setSwitch("On")}}>Turn On</button> :
                <button onClick={function(){setSwitch("Off")}}>Turn Off</button>
                }
            </div>
        </div>
}



export default Switch;