import React from 'react';

const Country_items = ({item, formData, setFormData, page, setPage}) => {
  return (
    <div>
        <label>
        <div className='country__card' key={item.id} 
          onClick={() => {
            setFormData({
            ...formData, jurisdiction: item.country, bank: []
            });

            setPage((page) => page + 1);
            } 
          }
        >
            <img src={item.image} alt="" className='country_img' />
            
            <span className="country__name">{item.country}
            </span>
            
        </div>
        </label>
    </div>
  )
}

export default Country_items;