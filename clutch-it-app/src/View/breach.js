import React from "react";
import Breach from '../Resources/agent-images/breach.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function breach() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Breach}/>
      </div>
    </div>
  )
}

export default breach