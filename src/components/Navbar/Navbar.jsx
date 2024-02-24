import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Translator from '../../i18n/Translator.js';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>MAKIRO</div>
      <div className='navbar-links'>
        <NavLink to='/'><Translator path='nav.home'/></NavLink>
        <NavLink to='/menu'><Translator path='nav.menu'/></NavLink>
        <NavLink to='/services'><Translator path='nav.services'/></NavLink>
        <NavLink to='/contacts'><Translator path='nav.contacts'/></NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
