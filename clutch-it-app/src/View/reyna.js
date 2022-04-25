import React from "react";
import Reyna from '../Resources/agent-images/reyna.png';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function reyna() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Reyna}/>
      </div>
    </div>
  )
}

export default reyna