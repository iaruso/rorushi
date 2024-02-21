import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Translator from '../../i18n/Translator.js';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>Logo</div>
      <div className='navbar-links'>
        <Link to='/'><Translator path='nav.home'/></Link>
        <Link to='/menu'><Translator path='nav.menu'/></Link>
        <Link to='/services'><Translator path='nav.services'/></Link>
        <Link to='/contacts'><Translator path='nav.contacts'/></Link>
      </div>
    </nav>
  );
}

export default Navbar;