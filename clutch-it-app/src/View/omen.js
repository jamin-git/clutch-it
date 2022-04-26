import React from "react";
import Omen from '../Resources/agent-images/omen.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function omen() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Omen}/>
      </div>
    </div>
  )
}

export default omen