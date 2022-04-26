import React from "react";
import DuelistsMain from '../Resources/type-imgs/duelists.svg'
import DuelistBgnd from '../Resources/type-imgs/duelbgnd.svg'
import './types.css';
import MiniNav from "../Components/MiniNav";

function duelist() {
  return (
    <div>
      <MiniNav />

      <div>
        <img class='mainImg' src={DuelistsMain} />
        <div class='desc-container'>
          <p class='desc-item'> DUELISTS are one of the four roles that agents are divided into in VALORANT. They have abilities that allow them to focus on being the first to enter sites and engage the enemy. They are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.</p>
        </div>
        <div>
          <p class='title'>MEET THE AGENTS</p>
      </div>
      <div>
        <img class='bgnd' src={DuelistBgnd}/>
      </div>
      </div>


      {/* <div>
        <p class='title'>MEET THE AGENTS</p>
      </div>


        <a href="/raze">
          <p class='name-one'>RAZE</p>
        </a>

        <a href="/reyna">
          <p class='name-two'>REYNA</p>
        </a>

        <a href="/jett">
          <p class='name-three'>JETT</p>
        </a> */}
      
  </div>
  )
}

export default duelist