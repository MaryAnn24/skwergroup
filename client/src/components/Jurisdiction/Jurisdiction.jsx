import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {countryData} from './Country_data';
import Country_items from './Country_items';

import './Jurisdiction.css';

const Jurisdiction = () => {
  const [country, setCountry] = useState([]);
  const [item, setItem] = useState({cat: 'active'});

  useEffect(() => {
    if(item.cat === 'active'){
      setCountry(countryData);
    } else {
      /* Filter condition hear */
      setItem({cat: 'active'});
    }

  }, [item]);

  return (
    <div>
      <div className="country__container container grid">
        {country.map((item) => {
          return <Country_items item={item} key={item.id} />;
        })}
      </div>
    </div>
  )
}

export default Jurisdiction