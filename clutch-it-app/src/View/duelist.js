import React from "react";
import DuelistsMain from '../Resources/type-imgs/duelists.svg'
import DuelistBgnd from '../Resources/type-imgs/duelbgnd.svg'
import './types.css';
import MiniNav from "../Components/MiniNav";
import ReynaDuel from '../Resources/agents/REYNA.svg'
import JettDuel from '../Resources/agents/JETT.svg'
import YoruDuel from '../Resources/agents/YORU.svg'
import PhoenixDuel from '../Resources/agents/PHOENIX.svg'
import NeonDuel from '../Resources/agents/NEON.svg'
import RazeDuel from '../Resources/agents/RAZE.svg'

import { Row, Col, Carousel } from "react-bootstrap";

//function duelist() {
  const duelist = () => {
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
        <div class="carousel-bg">
          <Carousel>
            <Carousel.Item>
              <img class='padRight' src={ReynaDuel}/>
              <img class='padLeft padTop' src={JettDuel}/>
              <div class='caroCapLeft'>
                <a href="/reyna">
                  <h1>REYNA</h1>
                </a>
              </div>
              <div class="caroCapRight">
                <a href="/jett">
                  <h1>JETT</h1>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img class='padRight padTop' src={YoruDuel}/>
              <img class='padLeft padTop' src={PhoenixDuel}/>
              <div class='caroCapLeft'>
                <a href="/yoru">
                  <h1>YORU</h1>
                </a>
              </div>
              <div class="caroCapRight">
                <a href="/phoenix">
                  <h1>PHOENIX</h1>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img class='padRight padTop' src={RazeDuel}/>
              <img class='padLeft padTop' src={NeonDuel}/>
              <div class='caroCapLeft'>
                <a href="/raze">
                  <h1>RAZE</h1>
                </a>
              </div>
              <div class="caroCapRight">
                <a href="/neon">
                  <h1>NEON</h1>
                </a>
              </div>
            </Carousel.Item>
          </Carousel>
          
          
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
//}

export default duelist