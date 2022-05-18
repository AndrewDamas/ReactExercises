import { useState } from "react";
import Greeting from "./Greeting";
import './Shape.css';

export default function Shape(){
    const [diameter, setDiameter] = useState(25);
    const [isChecked, setIsChecked] = useState(false);
    const styles = {
        width: diameter + "px",
        height: diameter + "px",
        background: "red"
    }
    let myName = "Andrew";
    let myColor = "Black";
    let myAge = 24;
    function button(){
        console.log("You clicked me.")
    }
    return (
        <div className="Shape">
            <h1>Hi</h1>
            <Greeting myName = {myName} myColor = {myColor} myAge = {myAge}/>
            <form action="">
                <input type="number" value={diameter} name="" id="Diameter" onChange={(e) => setDiameter(e.target.valueAsNumber)}/>
                <label htmlFor="Diameter">Diameter</label>
                <input type="checkbox" name="" id="isCircle" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
                <label htmlFor="isCircle">Is Circle?</label>
            </form>
            <div className={isChecked? "Circle" : ""} style={styles}></div>
            {false || <p>whattup</p>}
            <button onClick={button}>CLICK ME</button>
        </div>
    );
}