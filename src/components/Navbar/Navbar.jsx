import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Translator from '../../i18n/Translator.js';
import Footer from '../Footer/Footer.jsx';
import gsap from 'gsap';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [disableLinks, setDisableLinks] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    setDisableLinks(true);
    setTimeout(() => {
      setDisableLinks(false);
    }, 1200);
    gsap.fromTo(
      '.app',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power1.inOut'
      }
    );
  }, [pathName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (event) => {
    if (disableLinks) {
      event.preventDefault();
    } else {
      setShowMenu(false);
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>MAKIRO</div>
      <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
        <div className='navbar-links-list'>
          <NavLink to='/' onClick={handleLinkClick}><Translator path='nav.home'/></NavLink>
          <NavLink to='/menu' onClick={handleLinkClick}><Translator path='nav.menu'/></NavLink>
          <NavLink to='/services' onClick={handleLinkClick}><Translator path='nav.services'/></NavLink>
          <NavLink to='/contacts' onClick={handleLinkClick}><Translator path='nav.contacts'/></NavLink>
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