import React from "react";
import Kayo from '../Resources/agent-images/kayo.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function kayo() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Kayo}/>
      </div>
    </div>
  )
}

export default kayo