import React from "react";
import Astra from '../Resources/agent-images/astra.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function astra() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Astra}/>
      </div>
    </div>
  )
}

export default astra