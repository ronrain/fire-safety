import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="./logo.png" alt="Logo" />
        </a>
        <a href="tel:+3473927031"><strong>For Immediate Assistance Call 3473927031</strong></a>
        <ul className="navbar-nav d-flex align-items-center">
          <li className="nav-item">
            <Link to="/details" className="nav-link">
              What We Do
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Who We Are
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
