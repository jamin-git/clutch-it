import React from "react";
import Skye from '../Resources/agent-images/skye.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function skye() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Skye}/>
      </div>
    </div>
  )
}

export default skye