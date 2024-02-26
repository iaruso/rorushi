import React from 'react';
import './Services.css';
import Translator from '../../i18n/Translator.js';

function Services() {
  const ServicesCard = ({ titlePath, descriptionPath, statusPath, partnerPath, contact }) => (
    <div className='services-card'>
      <div className='services-card-header'>
        <h2><Translator path={titlePath}/></h2>
      </div>
      <div className='services-card-footer'>
        <p><Translator path={descriptionPath}/></p>
        {statusPath && <span><Translator path={statusPath}/></span>}
        {partnerPath && <div>
      
        </div>}
        {contact && <a className="services-contact" href='tel:+351237777777'>(+351) 237 777 777</a>}
      </div>
    </div>
  );
  return (
    <div className='services-section'>
      <img className='services-cover' src='./src/assets/images/makiro_services_cover.jpg'/>
      <ServicesCard
        titlePath='services.reservation.title'
        descriptionPath='services.reservation.description'
      />
      <ServicesCard
        titlePath='services.delivery.title'
        descriptionPath='services.delivery.description'
        statusPath='services.delivery.status'
      />
      <ServicesCard
        titlePath='services.partner.title'
        descriptionPath='services.partner.description'
      />
      <ServicesCard
        titlePath='services.takeaway.title'
        descriptionPath='services.takeaway.description'
        contact={true}
      />
    </div>
  );
}

export default Services;