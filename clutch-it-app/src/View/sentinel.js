import React from "react";
import SentinelsMain from '../Resources/type-imgs/sentinels.svg'
import SentinelBgnd from '../Resources/type-imgs/sentbgnd.svg'
import './types.css';
import MiniNav from "../Components/MiniNav";
import ChambSent from '../Resources/agents/CHAMBER.svg'
import KillSent from '../Resources/agents/KILLJOY.svg'
import CyphSent from '../Resources/agents/CYPHER.svg'
import SageSent from '../Resources/agents/SAGE.svg'


import { Carousel } from "react-bootstrap";

function sentinel() {
  //const duelist = () => {
    return (
      <div>
        <MiniNav />
  
        <div>
          <img class='mainImg' src={SentinelsMain} />
          <div class='desc-container'>
            <p class='desc-item'> SENTINELS have abilities that allow them to focus on defensive play, with emphasis on supporting the rest of the team through providing intel, anchoring down sites, and preventing the enemy from flanking. They are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.</p>
          </div>
          <div>
            <p class='title'>MEET THE AGENTS</p>
        </div>
        <div class="carousel-bg4" style={{marginTop: '-20em'}}>
          <Carousel>
            <Carousel.Item>
              <img src={ChambSent}/>
              <img src={KillSent}/>
              <div class='caroCapLeft'>
                <a href="/chamber">
                  <h1>CHAMBER</h1>
                </a>
              </div>
              <div class="caroCapRight">
                <a href="/killjoy">
                  <h1>KILLJOY</h1>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src={CyphSent}/>
              <img src={SageSent}/>
              <div class='caroCapLeft'>
                <a href="/cypher">
                  <h1>CYPHER</h1>
                </a>
              </div>
              <div class="caroCapRight">
                <a href="/sage">
                  <h1>SAGE</h1>
                </a>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
  
        
        </div>
    )
  //}
}

export default sentinel