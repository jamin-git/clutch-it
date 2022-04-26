import React from "react";
import Jett from '../Resources/agent-images/jett.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


function jett() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Jett}/>
      </div>
    </div>
  )
}

export default jett