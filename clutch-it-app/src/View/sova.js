import React from "react";
import Sova from '../Resources/agent-images/sova.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function sova() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Sova}/>
      </div>
    </div>
  )
}

export default sova