import React from 'react'
import logo from "./images/logo.png"
import {FaBars, FaTimes} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='header'>
      <nav className="navbar">
        <a href="/" className="logo">
           <img src={logo} alt="logo" />
        </a>
            <div className="hamburger">
                     <FaBars/>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
