import React from "react";
import Neon from '../Resources/agent-images/neon.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function neon() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Neon}/>
      </div>
    </div>
  )
}

export default neon