import React from "react";
import ControllersMain from '../Resources/type-imgs/controllers.svg'
import ControllerBgnd from '../Resources/type-imgs/controlbgnd.svg'
import './types.css';
import MiniNav from "../Components/MiniNav";
import AstraCon from '../Resources/agents/ASTRA.svg'
import BrimCon from '../Resources/agents/BRIMSTONE.svg'
import OmenCon from '../Resources/agents/OMEN.svg'
import ViperCon from '../Resources/agents/VIPER.svg'


import { Carousel } from "react-bootstrap";

//function controller() {
  const controller = () => {
    return (
      <div>
        <MiniNav />
  
        <div>
          <img class='mainImg' src={ControllersMain} />
          <div class='desc-container'>
            <p class='desc-item'> CONTROLLERS have abilities that allow them to assist their teammates by cutting enemy vision, taking control of an area, and forcing enemies into choke points. They are experts in slicing up dangerous territory to set their team up for success.</p>
          </div>
          <div>
            <p class='title2'>MEET THE AGENTS</p>
        </div>
        <div>
          <img class='bgnd' src={ControllerBgnd}/>
          <Carousel>
            <Carousel.Item>
              <img src={AstraCon}/>
              <img src={BrimCon}/>
              <div class='caroCap'>
                <a href="/astra">
                  <h1>ASTRA</h1>
                </a>
              </div>
              <div class="carousel-caption">
                <a href="/brimstone">
                  <h1>BRIMSTONE</h1>
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src={OmenCon}/>
              <img src={ViperCon}/>
              <div class='caroCap'>
                <a href="/omen">
                  <h1>OMEN</h1>
                </a>
              </div>
              <div class="carousel-caption">
                <a href="/viper">
                  <h1>VIPER</h1>
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

export default controller