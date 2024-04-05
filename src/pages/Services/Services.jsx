import './Services.css';
import React, { useState } from 'react';
import Translator from '../../i18n/Translator.js';
import Reservation from '../../components/Reservation/Reservation.jsx';

function ServicesCard({ titlePath, descriptionPath, statusPath, reservation, contact, className, openModal }) {
  const CardElement = contact ? 'a' : reservation ? 'button' : 'div';
  return (
    <CardElement
      href={contact ? 'tel:+351237777777' : ''}
      onClick={reservation ? openModal : null}
      className={`services-card ${statusPath ? 'unavailable' : ''} ${className}`}
    >
      <div className='services-card-header'>
        <h2><Translator path={titlePath}/></h2>
      </div>
      <div className='services-card-footer'>
        <p><Translator path={descriptionPath}/></p>
      </div>
      {statusPath && <h2 className='services-card-status'><Translator path={statusPath}/></h2>}
    </CardElement>
  );
}

function Services() {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='services-section'>
      <img className='services-cover'
        srcSet="./rorushi_services_cover_min.jpg 768w,
        ./rorushi_services_cover.jpg 1024w"
        sizes="(max-width: 1024px) 100vw, 1024px"
        src='./rorushi_services_cover.jpg' alt='Services cover'/>
      <div className='services-content'>
        <ServicesCard
          titlePath='services.partner.title'
          descriptionPath='services.partner.description'
          openModal={openModal}
        />
        <ServicesCard
          titlePath='services.delivery.title'
          descriptionPath='services.delivery.description'
          statusPath='services.delivery.status'
        />
        <ServicesCard
          titlePath='services.reservation.title'
          descriptionPath='services.reservation.description'
          reservation={true}
          className='reservation-card'
          openModal={openModal}
        />
        <ServicesCard
          titlePath='services.takeaway.title'
          descriptionPath='services.takeaway.description'
          contact={true}
          className='contact-card'
        />
      </div>
      {showModal && <Reservation closeModal={closeModal} />}
    </div>
  );
}

export default Services;
