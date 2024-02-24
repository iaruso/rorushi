import React from 'react';
import './Home.css';
import Translator from '../../i18n/Translator.js';
import Banner from '../../components/Banner/Banner.jsx';

function Home(){
  return (
    <div className='home-section'>
      <div className='home-image-container'>
        <img src='./src/assets/images/makiro_cover.jpg'/>
      </div>
      <Banner/>
      <div className='home-content'>
        <div className='home-info'>
          <div className='home-details'>
            <div className='home-details-card'>
              <p><Translator path='home.details.lunch.title'/></p>
              <p><Translator path='home.details.lunch.time'/></p>
              <p><Translator path='home.details.lunch.price'/></p>
            </div>
            <hr/>
            <div className='home-details-card'>
              <p><Translator path='home.details.dinner.title'/></p>
              <p><Translator path='home.details.dinner.time'/></p>
              <p><Translator path='home.details.dinner.price'/></p>
            </div>
            <hr/>
            <div className='home-details-card'>
              <p><Translator path='home.details.kids.title'/></p>
              <p><Translator path='home.details.kids.price'/></p>
            </div>
          </div>
          <div className='home-contact'>
            <a href='#'><Translator path='home.reservation'/></a>
            {/* <a href='tel:+351237777777'>(+351) 237 777 777</a> */}
          </div>
        </div>
        <div className='home-about'>
          <p><Translator path='home.about.intro'/></p>
          <p><Translator path='home.about.description'/></p>
        </div>
      </div>
    </div>
  );
}

export default Home;