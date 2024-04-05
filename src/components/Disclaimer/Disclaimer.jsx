import './Disclaimer.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
  const { t } = useTranslation();
  const [showDisclaimer, setShowDisclaimer] = useState(localStorage.getItem('disclaimer') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('disclaimer') === null) {
      localStorage.setItem('disclaimer', 'true');
    }
  }, []);

  const handleOkClick = () => {
    localStorage.setItem('disclaimer', 'false');
    setShowDisclaimer(false);
  };

  return (
    showDisclaimer && (
      <div className='disclaimer-modal'>
        <div className='disclaimer-modal-container'>
          <h1>{t('disclaimer.message')}</h1>
        </div>
        <button onClick={handleOkClick}>{t('disclaimer.understood')}</button>
      </div>
    )
  );
};

export default Disclaimer;
