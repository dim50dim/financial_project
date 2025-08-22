import React, { useState } from 'react'
import logo from "./images/logo.png"
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css"
const Navbar = () => {
 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className='header' id='navbar'>
      <nav className="navbar">
        <a href="/" className="logo">
           <img src={logo} alt="logo" />
        </a>
            <div className="hamburger" onClick={handleClick}>
                  {click ? (<FaTimes/>) 
                  : ( <FaBars size={30} style={{ color:"#ffffff"}} />)
                   }
                    
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"} >
                   <li className="nav-item">
                         <a href="#home">Home</a>
                   </li>
                   <li className="nav-item">
                         <a href="#about">About</a>
                   </li>
                   <li className="nav-item">
                         <a href="#testimonials">Testimonials</a>
                   </li>
                   <li className="nav-item">
                         <a href="#demo">Demo</a>
                   </li>
            </ul>
      </nav>
    </div>
  )
}

export default Navbar
