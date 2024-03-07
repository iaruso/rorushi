import React from 'react';
import './Services.css';
import Translator from '../../i18n/Translator.js';

function ServicesCard({ titlePath, descriptionPath, statusPath, reservation, contact, className }) {
  const CardElement = reservation ? 'a' : 'div';
  return (
    <CardElement
      href={contact ? 'tel:+351237777777' : reservation ? '#' : ''}
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
  return (
    <div className='services-section'>
      <img className='services-cover' src='./src/assets/images/makiro_services_cover.jpg'/>
      <div className='services-content'>
        <ServicesCard
          titlePath='services.partner.title'
          descriptionPath='services.partner.description'
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
        />
        <ServicesCard
          titlePath='services.takeaway.title'
          descriptionPath='services.takeaway.description'
          reservation={true}
          contact={true}
          className='contact-card'
        />
      </div>
    </div>
  );
}

export default Services;