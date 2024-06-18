// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("sdsd");
  };
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Mostafa Elsonbaty</div>
        <div>
          <ul className="nav-links">
            <li><Link to="about" smooth={false}>About</Link></li>
            <li><Link to="experience" smooth={false}>Experience</Link></li>
            <li><Link to="projects" smooth={false}>Projects</Link></li>
            <li><Link to="contact" smooth={false}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Mostafa Elsonbaty</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={()=>toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuOpen && (
            <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
              <li><Link to="about" smooth={false} onClick={toggleMenu}>About</Link></li>
              <li><Link to="experience" smooth={false} onClick={toggleMenu}>Experience</Link></li>
              <li><Link to="projects" smooth={false} onClick={toggleMenu}>Projects</Link></li>
              <li><Link to="contact" smooth={false} onClick={toggleMenu}>Contact</Link></li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
