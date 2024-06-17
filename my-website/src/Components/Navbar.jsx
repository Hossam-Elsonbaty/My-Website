// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Mostafa Elsonbaty</div>
        <div>
          <ul className="nav-links">
            <li><Link to="about" smooth={true}>About</Link></li>
            <li><Link to="experience" smooth={true}>Experience</Link></li>
            <li><Link to="projects" smooth={true}>Projects</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Mostafa Elsonbaty</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuOpen && (
            <div className="menu-links">
              <li><Link to="about" smooth={true} onClick={toggleMenu}>About</Link></li>
              <li><Link to="experience" smooth={true} onClick={toggleMenu}>Experience</Link></li>
              <li><Link to="projects" smooth={true} onClick={toggleMenu}>Projects</Link></li>
              <li><Link to="contact" smooth={true} onClick={toggleMenu}>Contact</Link></li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
