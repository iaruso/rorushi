import React, { useState } from 'react';
import './Home.css';
import Translator from '../../i18n/Translator.js';
import Banner from '../../components/Banner/Banner.jsx';
import Reservation from '../../components/Reservation/Reservation.jsx';

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
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className='home-section'>
      <img className='home-cover' 
        srcSet="./rorushi_home_cover_min.jpg 768w,
        ./rorushi_home_cover.jpg 1024w"
        sizes="(max-width: 1024px) 100vw, 1024px"
        src='./rorushi_home_cover.jpg' alt='Home cover'/>
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
        <button onClick={() => openModal()}><Translator path='home.reservation'/></button>
      </div>
      {showModal && <Reservation closeModal={closeModal} />}
    </div>
  );
}

export default Home;