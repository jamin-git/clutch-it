import React from "react";
import Chamber from '../Resources/agent-images/chamber.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function chamber() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Chamber}/>
      </div>
    </div>
  )
}

export default chamber