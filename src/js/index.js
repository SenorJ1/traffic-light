 
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

function TrafficLight() {
  const [lights, setLights] = useState([false, false, false]); 

  //function setActiveLight(isActive, index) {
    //if (isActive) {
     // lights[index] = false;
     // setLights([...lights]);
    //} else if (lights.every(active => !active)) {
     // lights[index] = true;
    //  setLights([...lights]);
   // }
  // }

const [red, setRed] = useState(true); 
const [yellow, setYellow] = useState(false);
const [green, setGreen] = useState(false);

  return (
    <ul className="traffic-light">
     {/***  {lights.map((isActive, index) => (
        <li key={index} onClick={() => setActiveLight(isActive, index)}>
          <span className={isActive ? "on" : "off"} />
        </li>
      ))} */}
      <li className = {red? "redcircleon": "redcircle"} onClick = {() =>{setRed(true);setYellow(false);setGreen(false);}}><span className = "on"> </span></li>;
      <li className = {yellow? "yellowcircleon" :"yellowcircle"} onClick = {() =>{setYellow(true); setRed(false); setGreen(false);}}><span></span></li>;
      <li className ={green? "greencircleon": "greencircle"} onClick= {() =>{setGreen(true);setRed(false); setYellow(false);}} ><span></span> </li>;
    </ul>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<TrafficLight />, rootElement);
