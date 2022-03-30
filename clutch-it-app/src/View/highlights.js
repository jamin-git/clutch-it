import React from 'react'
import HomeImage from '../Resources/HomeImage.svg'
import Agents from '../Resources/AGENTS.svg'
import Maps from '../Resources/MAPS.svg'
import './highlights.css'

const highlights = () => {
  return (
    <div class='highlights'>

      <div class='home-img'>
        <img src={HomeImage} />
      </div>

      <div>
        <p class='title1'>UPDATES</p>
      </div>
        
      <div class='updates-box'>
      </div>

      <div>
        <p class='title2'>TRENDING CLIPS</p>
      </div>
      
      <div class='trending-box'>
      </div>

      <div class='trending-box2'>
      </div>

      <div>
        <p class='title3'>CLUTCHED IT</p>
      </div>

      <div class='clutch-box'>
      </div>

      <div class='clutch-box2'>
      </div>

      <div class='agents-homeimg'>
        <img src={Agents} />
      </div>

      <a href="/agents">
        <p class='agents-home'>AGENTS</p>
      </a>

      <div class='maps-homeimg'>
        <img src={Maps} />
      </div>

      <a href="/maps">
        <p class='maps-home'>MAPS</p>
      </a>
            
    </div>
  )
}

export default highlights