// This is how a basic view (or page) can look. In order to create the template code for this, 
// install the https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
// plugin, create a new js file, and type rfce and hit enter.

import React from 'react'
import './about.css';

function about() {
  return (
    <div class='about'>
      <div>
        <p class='abt-text'> MEET THE TEAM!</p>
      </div>

      <div class='team-box1'></div>

      <div class='team-box2'></div>

      <div class = 'team-box3'></div>

      <div class = 'team-box4'></div>

      <div class = 'team-box5'></div>

      <div class = 'team-box6'></div>

      <div>
        <p class='libraries-text'> LIBRARIES USED</p>
      </div>

      <div class='libraries-box'>
        <p class='libraries-txt1'>- React</p>
        <p class='libraries-txt2'>- Bootstrap</p>
      </div>

    </div>

  )
}

export default about