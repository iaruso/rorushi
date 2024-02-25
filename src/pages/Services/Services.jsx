import React from 'react';
import './Services.css';
import Translator from '../../i18n/Translator.js';

function Services() {
  const ServicesCard = ({ titlePath, descriptionPath, statusPath, partnerPath }) => (
    <div className='services-card'>
      <div className='services-card-header'>
        <h2><Translator path={titlePath}/></h2>
      </div>
      <div className='services-card-footer'>
        <span><Translator path={descriptionPath}/></span>
        {statusPath && <span><Translator path={statusPath}/></span>}
        {partnerPath && <div>
          
        </div>}
      </div>
    </div>
  );
  return (
    <div className='services-section'>
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
      />
    </div>
  );
}

export default Services;