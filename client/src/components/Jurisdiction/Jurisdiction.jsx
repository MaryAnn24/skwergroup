import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {countryData} from './Country_data';
import CountryItems from './Country_items';

import './Jurisdiction.css';

const Jurisdiction = ({formData, setFormData, page, setPage, fields}) => {
  /* VARIABLES DECLARATION */
  const [country, setCountry] = useState([]);
  const [item, setItem] = useState({cat: 'active'});

  useEffect(() => {
    if(item.cat === 'active'){
      setCountry(countryData);
    } else {
      /* Filter condition here */
      setItem({cat: 'active'});
    }

  }, [item]);


  return (
    <div className='jurisdiction'>
      <div className="country__container container grid grid__4">
        {country.map((item) => {
          return <CountryItems formData = {formData} setFormData = {setFormData} page = {page} setPage = {setPage} item={item} key={item.id} />;
        })}
      </div>
    </div>
  );

}

export default Jurisdiction;