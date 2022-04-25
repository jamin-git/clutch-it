import React from "react";
import Triangles from '../Resources/TRIANGLES.svg'
import DuelUpdates from '../Resources/DUELISTUPDATE.svg'
import caro from '../Resources/fakeCaro.svg'
import './duelist.css';
import MiniNav from "../Components/MiniNav";

function duelist() {
  return (
    <div>
      <MiniNav />

      <div class='tri'>
        <img src={Triangles} />
      </div>
      <div>
        <p class='desc'>DUELISTS are the agents that create some of the most impact, offering aggression to a team comp. They should be expected to seek out engagements and frag, may that be finding the opening pick or clutching out a round.</p>
      </div>

      <div class='update'>
        <img src={DuelUpdates} />
      </div>

      <div>
        <p class='title'>MEET THE AGENTS</p>
      </div>

      <div class='carousel'>
        <img src={caro} />
      </div>

        <a href="/raze">
          <p class='name-one'>RAZE</p>
        </a>

        <a href="/reyna">
          <p class='name-two'>REYNA</p>
        </a>

        <a href="/jett">
          <p class='name-three'>JETT</p>
        </a>
      
  </div>
  )
}

export default duelist