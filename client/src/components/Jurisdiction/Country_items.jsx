import React from 'react';

const Country_items = ({item}) => {
  return (
    <div>
        <label>
        <div className='country__card' key={item.id} onClick={() => {}}>
            <img src={item.image} alt="" className='country_img' /><br />
            <input type="radio" name="country" /> 
            <span className="country__name">{item.country}</span>
        </div>
        </label>
    </div>
    
  )
}

export default Country_items