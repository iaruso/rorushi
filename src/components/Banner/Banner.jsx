import React from 'react';
import './Banner.css';
import Translator from '../../i18n/Translator.js';

const Banner = () => {
  return (
    <div className='promo-banner'>
      <div className='promo-banner-content'>
        <p><Translator path='banner'/></p>
        <p><Translator path='banner'/></p>
      </div>
      <div className='promo-banner-content'>
        <p><Translator path='banner'/></p>
        <p><Translator path='banner'/></p>
      </div>
    </div>
  );
}

export default Banner;
