import React from "react";
import InitiatorsMain from '../Resources/type-imgs/initiators.svg'
import InitiatorBgnd from '../Resources/type-imgs/initbgnd.svg'
import './types.css';
import MiniNav from "../Components/MiniNav";
import BreachInit from '../Resources/agents/BREACH.svg'
import KayoInit from '../Resources/agents/KAYO.svg'
import SkyeInit from '../Resources/agents/SKYE.svg'
import SovaInit from '../Resources/agents/SOVA.svg'


import { Carousel } from "react-bootstrap";

//function initiator() {
  const initiator = () => {
    return (
      <div>
        <MiniNav />
  
        <div>
          <img class='mainImg' src={InitiatorsMain} />
          <div class='desc-container'>
            <p class='desc-item'> INITIATORS have abilities that allow them to focus on flushing enemies out of hiding spots and corners in order to assist the team when charging into battle. They challenge angles by setting up their team to enter contested ground and push defenders away.</p>
          </div>
          <div>
            <p class='title2'>MEET THE AGENTS</p>
        </div>
        <div>
          <img class='bgnd' src={InitiatorBgnd}/>
          <Carousel>
            <Carousel.Item>
              <img src={BreachInit}/>
              <img src={KayoInit}/>
              <div class='caroCap'>
                <a href="/breach">
                  <h1>BREACH</h1>
                </a>
              </div>
              <div class="carousel-caption">
                <a href="/kayo">
                  <h1>KAYO</h1>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src={SkyeInit}/>
              <img src={SovaInit}/>
              <div class='caroCap'>
                <a href="/skye">
                  <h1>SKYE</h1>
                </a>
              </div>
              <div class="carousel-caption">
                <a href="/sova">
                  <h1>SOVA</h1>
                </a>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
  
        
        </div>
    )
  }
//}

export default initiator