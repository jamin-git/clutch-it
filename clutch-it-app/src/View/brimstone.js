import React from "react";
import Brimstone from '../Resources/agent-images/brimstone.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function brimstone() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Brimstone}/>
      </div>
    </div>
  )
}

export default brimstone