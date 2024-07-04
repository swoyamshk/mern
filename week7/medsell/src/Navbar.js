import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">MedSell</div>
        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">☰</label>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  };

export default Navbar;
