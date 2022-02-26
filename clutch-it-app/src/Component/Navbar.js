// Here is an example component, in this case it is acting as the navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './nav.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link className="nav-link" to="/controller">CONTROLLER</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/duelist">DUELIST</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sentinel">SENTINEL</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/initiator">INITIATOR</Link>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar