import React from "react";
import Cypher from '../Resources/agent-images/cypher.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function cypher() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Cypher}/>
      </div>
    </div>
  )
}

export default cypher