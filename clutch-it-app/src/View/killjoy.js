import React from "react";
import Killjoy from '../Resources/agent-images/killjoy.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function killjoy() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Killjoy}/>
      </div>
    </div>
  )
}

export default killjoy