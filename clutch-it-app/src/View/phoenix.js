import React from "react";
import Phoenix from '../Resources/agent-images/phoenix.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function phoenix() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Phoenix}/>
      </div>
    </div>
  )
}

export default phoenix