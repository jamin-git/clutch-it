import React from "react";
import Triangles from '../Resources/TRIANGLES.svg'
import DuelUpdates from '../Resources/DUELISTUPDATE.svg'
import './duelist.css';



function duelist() {
  return (
    <div>
      <div>
        <ul class='navbar'>
          <li class='navbar-item'>CONTROLLER</li>
          <li class='navbar-item'><a target="_self" href="./duelist" >DUELIST</a></li>
          <li class='navbar-item'>SENTINEL</li>
          <li class='navbar-item'>INITIATOR</li>
        </ul>
      </div>

      <div class='tri'>
        <img src={Triangles} />
      </div>
      <div>
        <p class='desc'>DUELISTS are the agents that create some of the most impact, offering aggression to a team comp. They should be expected to seek out engagements and frag, may that be finding the opening pick or clutching out a round.</p>
      </div>


      <div class='update'>
      <img src={DuelUpdates} />
</div>

  </div>
  )
}

export default duelist