import React from "react";
import Jett from '../Resources/JETDESCRIPTION.svg'
import './duelist.css';
import './jett.css';



function jett() {
  return (
    <div>
      <div>
        <ul class='navbar'>
          <li class='navbar-item'>CONTROLLER</li>
          <li class='navbar-item'><a class='smth' target="_self" href="./duelist" >DUELIST</a></li>
          <li class='navbar-item'>SENTINEL</li>
          <li class='navbar-item'>INITIATOR</li>
        </ul>
      </div>

      <div class='jett-desc'>
        <img src={Jett} />
      </div>

    
  </div>
  )
}

export default jett