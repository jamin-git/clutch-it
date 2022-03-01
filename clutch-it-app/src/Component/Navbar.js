// Here is an example component, in this case it is acting as the navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">HOME</Link>
                {/* This is the example structure of the navbar elements */}
                <Link to="/about">ABOUT</Link>
                <Link to="/agents">AGENTS</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar