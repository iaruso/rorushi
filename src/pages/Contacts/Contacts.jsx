import React from 'react';
import './Contacts.css';
import Translator from '../../i18n/Translator';

function Contacts(){
  return (
    <div className='contacts-section'>
      <img className='contacts-cover'
        srcSet="./rorushi_contacts_cover_min.jpg 768w,
        ./rorushi_contacts_cover.jpg 1024w"
        sizes="(max-width: 1024px) 100vw, 1024px"
        src='./rorushi_contacts_cover.jpg' 
        alt='Contacts cover'/>
      <div className='contacts-content'>
        <div className='contacts-info'>
          <div>
            <h2><Translator path='contacts.address'/></h2>
            <p>Rua do Almada, 154</p>
            <p>4000-196 Porto</p>
          </div>
          <div>
            <h2><Translator path='contacts.phone'/></h2>
            <p>(+351) 237 777 777</p>
          </div>
          <div>
            <h2><Translator path='contacts.opening_hours'/></h2>
            <p><Translator path='contacts.details.days'/></p>
            <p><Translator path='contacts.details.services'/></p>
          </div>
        </div>
        <div className='contacts-map'>
          <iframe title='Rorushi Map Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4014167262853!2d-8.614669522707915!3d41.147591410833044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e314842a13%3A0xf721a81eeb9de870!2sRua%20do%20Almada%20154%2C%204000-196%20Porto!5e0!3m2!1spt-PT!2spt!4v1709146703447!5m2!1spt-PT!2spt" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;