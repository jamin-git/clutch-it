import React from 'react';
import './MiniNav.css'

function MiniNav() {
    return (
        <div class="mini-nav">
            <ul class='navbar'>
                <a class='nav-link' href="" ><li class='navbar-item'>CONTROLLER</li></a>
                <a class='nav-link' href="./duelist" ><li class='navbar-item'>DUELIST</li></a>
                <a class='nav-link' href="" ><li class='navbar-item'>SENTINEL</li></a>
                <a class='nav-link' href="" ><li class='navbar-item'>INITIATOR</li></a>
            </ul>
        </div>
    );
}

export default MiniNav