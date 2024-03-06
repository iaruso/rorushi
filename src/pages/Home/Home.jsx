import React from 'react';
import './Home.css';
import Translator from '../../i18n/Translator.js';
import Banner from '../../components/Banner/Banner.jsx';

const PricingCard = ({ titlePath, pricePath, timePath, drinksPath, agePath, detailsPath }) => (
  <div className='home-pricing-card'>
    <div className='home-pricing-card-header'>
      <p><Translator path={titlePath}/></p>
      <p><Translator path={pricePath}/></p>
    </div>
    <div className='home-pricing-card-footer'>
      {agePath && <span><Translator path={agePath}/></span>}
      {timePath && <span><Translator path={timePath}/></span>}
      {detailsPath && <span><Translator path={detailsPath}/></span>}
      <span><Translator path={drinksPath}/></span>
    </div>
  </div>
);

const DetailsCard = ({ titlePath, descriptionPath }) => (
  <div className='home-details-card'>
    <h2><Translator path={titlePath}/></h2>
    <p><Translator path={descriptionPath}/></p>
  </div>
);

function Home(){
  return (
    <div className='home-section'>
      <img className='home-cover' src='./src/assets/images/makiro_main_cover.jpg'/>
      <Banner/>
      <div className='home-content'>
        <div className='home-options'>
          <DetailsCard
            titlePath='home.details.quality.title'
            descriptionPath='home.details.quality.description'
          />
          <DetailsCard
            titlePath='home.details.service.title'
            descriptionPath='home.details.service.description'
          />
          <DetailsCard
            titlePath='home.details.environment.title'
            descriptionPath='home.details.environment.description'
          />
        </div>
        <div className='home-info'>
          <div className='home-pricing'>
            <PricingCard
              titlePath='home.pricing.lunch.title'
              pricePath='home.pricing.lunch.price'
              timePath='home.pricing.lunch.time'
              drinksPath='home.pricing.lunch.drinks'
            />
            <PricingCard
              titlePath='home.pricing.dinner.title'
              pricePath='home.pricing.dinner.price'
              timePath='home.pricing.dinner.time'
              drinksPath='home.pricing.dinner.drinks'
            />
            <PricingCard
              titlePath='home.pricing.kids.title'
              pricePath='home.pricing.kids.price'
              drinksPath='home.pricing.kids.drinks'
              agePath='home.pricing.kids.age'
            />
            <PricingCard
              titlePath='home.pricing.takeaway.title'
              pricePath='home.pricing.takeaway.price'
              drinksPath='home.pricing.takeaway.drinks'
              detailsPath='home.pricing.takeaway.details'
            />
          </div>
        </div>
      </div>
      <div className='home-contact'>
        <a href='#'><Translator path='home.reservation'/></a>
      </div>
    </div>
  );
}

export default Home;