import React from 'react';
import './Home.css';
import Translator from '../../i18n/Translator.js';
import Banner from '../../components/Banner/Banner.jsx';

const DetailsCard = ({ titlePath, pricePath, timePath, drinksPath, agePath, detailsPath }) => (
  <div className='home-details-card'>
    <div className='home-details-card-header'>
      <p><Translator path={titlePath}/></p>
      <p><Translator path={pricePath}/></p>
    </div>
    <div className='home-details-card-footer'>
      {agePath && <span><Translator path={agePath}/></span>}
      {timePath && <span><Translator path={timePath}/></span>}
      {detailsPath && <span><Translator path={detailsPath}/></span>}
      <span><Translator path={drinksPath}/></span>
    </div>
  </div>
);

function Home(){
  return (
    <div className='home-section'>
      
      <img className='home-cover' src='./src/assets/images/makiro_cover.jpg'/>
      
      <Banner/>
      <div className='home-content'>
        <div className='home-info'>
          <div className='home-details'>
            <DetailsCard
              titlePath='home.details.lunch.title'
              pricePath='home.details.lunch.price'
              timePath='home.details.lunch.time'
              drinksPath='home.details.lunch.drinks'
            />
            <DetailsCard
              titlePath='home.details.dinner.title'
              pricePath='home.details.dinner.price'
              timePath='home.details.dinner.time'
              drinksPath='home.details.dinner.drinks'
            />
            <DetailsCard
              titlePath='home.details.kids.title'
              pricePath='home.details.kids.price'
              drinksPath='home.details.kids.drinks'
              agePath='home.details.kids.age'
            />
            <DetailsCard
              titlePath='home.details.takeaway.title'
              pricePath='home.details.takeaway.price'
              drinksPath='home.details.takeaway.drinks'
              detailsPath='home.details.takeaway.details'
            />
          </div>
          <div className='home-contact'>
            <a href='#'><Translator path='home.reservation'/></a>
            {/* <a href='tel:+351237777777'>(+351) 237 777 777</a> */}
          </div>
          {/* <div className='home-address'>
            <h2><Translator path='home.location'/></h2>
            <p>Rua do Almada, 154</p>
            <p>4000-196 Porto</p>
          </div> */}
        </div>
        <div className='home-about'>
          <p><Translator path='home.about.intro'/></p>
          <p><Translator path='home.about.description'/></p>
          <img src='./src/assets/images/makiro_chef.jpg'/>
        </div>
      </div>
    </div>
  );
}

export default Home;