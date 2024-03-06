import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Translator from '../../i18n/Translator.js';
import Footer from '../Footer/Footer.jsx';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>MAKIRO</div>
      <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
        <div className='navbar-links-list'>
          <NavLink to='/' onClick={() => setShowMenu(false)}><Translator path='nav.home'/></NavLink>
          <NavLink to='/menu' onClick={() => setShowMenu(false)}><Translator path='nav.menu'/></NavLink>
          <NavLink to='/services' onClick={() => setShowMenu(false)}><Translator path='nav.services'/></NavLink>
          <NavLink to='/contacts' onClick={() => setShowMenu(false)}><Translator path='nav.contacts'/></NavLink>
        </div>
        <Footer/>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
