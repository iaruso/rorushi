import React, { useState, useEffect } from "react";
import './Footer.css';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const Footer = () => {
  const { i18n } = useTranslation();
	const [languageBool, setLanguageBool] = useState(null);
	
	useEffect(() => {
		i18n.language === 'en-US' ? setLanguageBool(true) : setLanguageBool(false);
	}, [i18n]);
  const toggleLanguage = () => {
    setLanguageBool(prevState => !prevState);
    !languageBool ? i18n.changeLanguage('en-US') : i18n.changeLanguage('pt-PT');
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
          {languageBool ? "English" : "Português"}
        </span>
      </div>
      <div className='footer-social-media'>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
