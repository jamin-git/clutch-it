// This is how a basic view (or page) can look. In order to create the template code for this, 
// install the https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
// plugin, create a new js file, and type rfce and hit enter.

import React from 'react'
import './about.css';

function about() {
  return (
    <div class='about'>
      <h1>ABOUT US</h1>
      <div class="container">
        <div class="about-us">
          <h2> Our Goal</h2>
          <p>
            text here
          </p>
        </div>
      </div>

      <h1>MEET THE TEAM</h1>
      <div class="container">
        <div class="members-container">
          <div class="members-item">
            <h2> Jacob </h2>
            <div class="socials">
              <a href="https://www.github.com/jamin-git" target="_blank" rel="noopener noreferrer"> Github </a>
              <a href="https://www.linkedin.com/in/jacobsamin/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            </div>
          </div>

          <div class="members-item">
            <h2> Michelle </h2>
            <div class="socials">
              <a href="https://www.github.com/michelle692" target="_blank" rel="noopener noreferrer"> Github </a>
            </div>
          </div>

          <div class="members-item">
            <h2> Sushant </h2>
            <div class="socials">
              <a href="https://www.github.com/SushGuha" target="_blank" rel="noopener noreferrer"> Github </a>
              <a href="https://www.linkedin.com/in/sushantguha/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            </div>
          </div>
        </div>

        <div class="members-container">
          <div class="members-item">
            <h2> Andy </h2>
            <div class="socials">
              <a href="https://www.github.com/andyng2002" target="_blank" rel="noopener noreferrer"> Github </a>
              <a href="https://www.linkedin.com/in/andynguyen--/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            </div>
          </div>

          <div class="members-item">
            <h2> Chloe </h2>
            <div class="socials">
              <a href="https://www.github.com/chlo-ng" target="_blank" rel="noopener noreferrer"> Github </a>
              <a href="https://www.linkedin.com/in/chlo-ng/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            </div>
          </div>

          <div class="members-item">
            <h2> Mina </h2>
            <div class="socials">
              <a href="https://www.github.com/kmina9" target="_blank" rel="noopener noreferrer"> Github </a>
            </div>
          </div>
        </div>
      </div>
 
      <h1>LIBRARIES USED</h1>

      <div class='libraries-box'>
        <h2>- React</h2>
        <h2>- Bootstrap</h2>
      </div> 
    </div>

  )
}

export default about