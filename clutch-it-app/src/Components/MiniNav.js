import React from 'react';
import './MiniNav.css'

function MiniNav() {
    return (
        <div class="mini-nav">
            <ul class='navbar'>
                <li class='navbar-item'>CONTROLLER</li>
                <a class='nav-link' href="./duelist" ><li class='navbar-item'>DUELIST</li></a>
                <li class='navbar-item'>SENTINEL</li>
                <li class='navbar-item'>INITIATOR</li>
            </ul>
        </div>
    );
}

export default MiniNav