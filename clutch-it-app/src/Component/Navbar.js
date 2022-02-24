import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar