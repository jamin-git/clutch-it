import React from "react";
import Raze from '../Resources/agent-images/raze.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


function raze() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Raze}/>
      </div>
    </div>
  )
}

export default raze