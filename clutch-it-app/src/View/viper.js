import React from "react";
import Viper from '../Resources/agent-images/viper.svg';
import './agent.css';
import MiniNav from "../Components/MiniNav";


 function viper() {
  return (
    <div>
      <MiniNav />
      <div>
        <img class='agent-desc' src={Viper}/>
      </div>
    </div>
  )
}

export default viper