import React from 'react';
import logo from './Figures/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <img src= {logo} alt="Company Logo" className="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/quality">Quality</Link></li>
          <li><Link to="/infrastructure">Infrastructure</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
