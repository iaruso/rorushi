import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-dropdown-select';
import './Menu.css';

function Menu() {
  const [sushiData, setSushiData] = useState(null);
  const [filteredSushiData, setFilteredSushiData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSushiData(data);
        setFilteredSushiData(data ? data.sushiCollection.flatMap(type => type.options) : null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query); 
  };

  const handleTypeChange = values => {
    setSelectedType(values && values.length > 0 ? values[0].value : 'All');
  };

  useEffect(() => {
    if (sushiData) {
      let filteredData = sushiData.sushiCollection.flatMap(type =>
        type.options.filter(
          option =>
            t(option.name.toLowerCase()).includes(searchQuery) &&
            (selectedType === 'All' || type.type === selectedType)
        )
      );
      setFilteredSushiData(filteredData);
    }
  }, [searchQuery, selectedType, sushiData]);

  if (!filteredSushiData) {
    return <div>Loading...</div>;
  }

  const options = [{ value: 'All', label: 'All' }, ...sushiData.sushiCollection.map(type => ({ value: type.type, label: type.type }))];
  
  return (
    <div className='menu-section'>
      <div className='menu-filters'>
        <input
          type='text'
          placeholder={t('menu.search')}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Select
          options={options}
          labelField='label'
          valueField='value'
          values={[{ value: selectedType, label: selectedType }]}
          onChange={handleTypeChange}
          searchable={false}
        />
      </div>
      <div className='menu-options'>
        {filteredSushiData.map(option => (
          <SushiCard key={option.name} option={option} />
        ))}
      </div>
    </div>
  );
}

function SushiCard({ option }) {
  const { name, description, ingredients, img, img_min } = option;
  const { t } = useTranslation();
  return (
    <div className='sushi-card'>
      <div className='sushi-card-info'>
        <h2>{t(name)}</h2>
        <p>{t(description)}</p>
        {/* <div className='ingredients'>
          {ingredients.map(ingredient => (
            <span key={ingredient}>{t(ingredient)}</span>
          ))}
        </div> 
        Doesn't make sense at this moment
        */}
      </div>
      <img
        srcSet={`./${img_min} 768w, ./${img} 1024w`}
        sizes='(max-width: 1024px) 100vw, 1024px'
        src={`./${img}`}
        alt={t(name)}
      />
    </div>
  );
}

export default Menu;
