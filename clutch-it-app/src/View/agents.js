import React from "react";
import Controller from "../Resources/CONTROLLER.svg"
import Sentinel from "../Resources/SENTINEL.svg"
import Initiator from "../Resources/INITIATOR.svg"
import Duelist from "../Resources/DUELIST.svg"
import "./agents.css";
import "./about.css";

const agents = () => {
  return (
    <div className="agents">

      <div>
        <p class='abt-text'> AGENT TYPES</p>
      </div>

      <div class='cont-img'>
          <img src={Controller} />
      </div>

      <div class='sent-img'>
          <img src={Sentinel} />
      </div> 

      <div class='init-img'>
          <img src={Initiator} />
      </div> 

      <div class='duel-img'>
          <img src={Duelist} />
      </div> 

      <a href="/duelist">
        <p class='duel-txt'>DUELISTS</p>
      </a>

      <a>
        <p class='cont-txt'>CONTROLLERS</p>
      </a>

      <a>
        <p class='sent-txt'>SENTENIALS</p>
      </a>

      <a>
        <p class='init-txt'>INITIATORS</p>
      </a>


    </div>
  );
};

export default agents;
