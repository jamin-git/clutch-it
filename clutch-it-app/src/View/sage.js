import React from "react";
import Sage from '../Resources/agent-images/sage.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function sage() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Sage}/>
      </div>
    </div>
  )
}

export default sage