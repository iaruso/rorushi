import './Reservation.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-dropdown-select';
import Calendar from 'react-calendar';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Logo from '../Logo/Logo.jsx';
import DateIcon from '../Icons/DateIcon.jsx';
import GroupIcon from '../Icons/GroupIcon.jsx';
import GroupsIcon from '../Icons/GroupsIcon.jsx';
import PersonIcon from '../Icons/PersonIcon.jsx';
import TimeIcon from '../Icons/TimeIcon.jsx';

const Reservation = ({ closeModal }) => {
  const { t, i18n } = useTranslation();
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState(i18n.language);

  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(currentDate.getMonth() + 2);

  const day = date.getDate();
  const month = date.toLocaleString(locale, { month: 'long' });

  const numberOfPeopleOptions = [
    { value: 1, label: '1 ' + t('reservation.person') },
    { value: 2, label: '2 ' + t('reservation.people') },
    { value: 3, label: '3 ' + t('reservation.people') },
    { value: 4, label: '4 ' + t('reservation.people') },
    { value: 5, label: '5 ' + t('reservation.people') },
    { value: 6, label: '6 ' + t('reservation.people') },
    { value: 7, label: '7 ' + t('reservation.people') },
    { value: 8, label: '8 ' + t('reservation.people') }
  ];

  const hourOptions = [];
  for (let hour = 12; hour <= 14; hour++) {
    for (let minute = 0; minute <= 45; minute += 15) {
      const formattedHour = `${hour < 10 ? '0' : ''}${hour}:${minute === 0 ? '00' : minute}`;
      if (hour === 14 && minute === 45) break;
      hourOptions.push({ value: formattedHour, label: formattedHour });
    }
  }
  for (let hour = 20; hour <= 22; hour++) {
    for (let minute = 0; minute <= 45; minute += 15) {
      const formattedHour = `${hour < 10 ? '0' : ''}${hour}:${minute === 0 ? '00' : minute}`;
      if (hour === 22 && minute === 45) break;
      hourOptions.push({ value: formattedHour, label: formattedHour });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    closeModal();
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Helmet>
      </HelmetProvider>
      <div className='reservation-modal'>
        <div className='reservation-modal-container'>
          <div className='reservation-modal-content'>
            <div className='reservation-modal-logo'>
              <Logo/>
            </div>
            <hr></hr>
            <div className='reservation-modal-header'>
              <div>
                <div>
                  <p>{t('reservation.title', { day, month })}</p>
                  <DateIcon/>
                </div>
                {selectedHour && (
                  <div>
                    <span>-</span>
                    <p>{selectedHour[0]?.label}</p>
                    <TimeIcon/>
                  </div>
                )}
                {selectedNumberOfPeople && (
                  <div>
                    <span>-</span>
                    <p>{selectedNumberOfPeople[0]?.value}</p>
                    {selectedNumberOfPeople[0]?.value === 1 ? <PersonIcon/> : selectedNumberOfPeople[0]?.value === 2 ? <GroupIcon/> : <GroupsIcon/>}
                  </div>
                )}
              </div>
            </div>
            <hr></hr>
            <form onSubmit={handleSubmit}>
              <div className='reservation-modal-calendar'>
                <Calendar onChange={setDate} value={date} minDate={currentDate} maxDate={maxDate} locale={locale} />
              </div>
              <hr></hr>
              <div className='reservation-modal-options'>
                <Select
                  options={hourOptions}
                  value={selectedHour}
                  onChange={setSelectedHour}
                  dropdownPosition={'top'}
                  searchable={false}
                  placeholder={t('reservation.time')}
                  required={true}
                />
                <Select
                  options={numberOfPeopleOptions}
                  value={selectedNumberOfPeople}
                  onChange={setSelectedNumberOfPeople}
                  dropdownPosition={'top'}
                  searchable={false}
                  placeholder={t('reservation.number')}
                  required={true}
                />
              </div>
              <hr></hr>
              <div className='reservation-modal-actions'>
                <button type="submit">{t('reservation.book')}</button>
                <button type="button" onClick={closeModal}>{t('reservation.cancel')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
