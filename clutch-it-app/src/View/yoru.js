import React from "react";
import Yoru from '../Resources/agent-images/yoru.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function yoru() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Yoru}/>
      </div>
    </div>
  )
}

export default yoru