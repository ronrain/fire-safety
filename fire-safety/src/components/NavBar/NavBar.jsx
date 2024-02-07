import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img src="./logo.png" alt="Logo" className="navbar-logo" style={{ width: '70px', height: 'auto' }} />
          </a>
          <a href="tel:+3473927031"><strong>For Immediate Assistance Call 3473927031</strong></a>
        </div>
        
        <ul className="navbar-nav ml-auto">
          <li className="nav-item d-inline">
            <Link to="/details" className="nav-link">
              What We Do
            </Link>
          </li>
          <li className="nav-item d-inline">
            <Link to="/about" className="nav-link">
              Who We Are
            </Link>
          </li>
          <li className="nav-item d-inline">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
