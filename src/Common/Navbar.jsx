import React from 'react';
import logo from '../assets/logo.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to={'/'}><img style={{width:'45px'}} src={logo} alt="" /></Link></div>
      <div className="navbar-buttons">
        <Link to={'/signin'}><button className="navbar-button">Login</button></Link>
        <Link to={'./signup'}><button className="navbar-button">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
