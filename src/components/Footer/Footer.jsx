import React, { useState, useEffect } from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const Footer = ({ toggleMenu }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    
    toggleMenu();
    
    gsap.fromTo(
      'html',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
        ease: 'power1.inOut',
      }
    );
  };

  return (
    <footer className='footer'>
      <div className='footer-language'>
        <span onClick={toggleLanguage}>
          {language === 'en' ? 'English' : 'Português'}
        </span>
      </div>
      <div className='footer-social-media'>
        <a href='#'>Facebook</a>
        <a href='#'>Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
