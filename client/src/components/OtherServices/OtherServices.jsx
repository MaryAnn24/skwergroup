import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './ServicesData';
import './OtherServices.css';

function OtherServices ({formData, setFormData}) {
  /* VARIABLES DECLARATION */
  const [service, setService] = useState(getData);
  const [item, setItem] = useState({remarks: 'active'});
  // const myJSON = JSON.stringify(arr);
  
  const [checked, setChecked] = useState(formData.add_serv);
    // Add/Remove checked item from list
    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);

      setFormData({
        ...formData, add_serv: updatedList
      });
      console.log(updatedList);
    };

  return (
    <div className='add__services grid grid__4'>
     
      {/* <input className='form-control none'
          type="text" 
          placeholder='Company name'
          name="c_name1"
          value={formData.add_serv}
      />           */}
          {service.map((item, index) => {

            return <label key={index}>
              <div className='serv_box grid'>
                <span className='icon'><img src={item.icon} alt="stamp_icon" /></span>
              
              <input className='form-control checkbox' 
                type="checkbox" 
                name="c_name1"
                
                onChange={handleCheck} checked = {formData.add_serv.includes((item.service).toString())} 
                value= {item.service}
                />
                </div>
                <p className='serv_name'>{item.service}</p>
                <span className='serv_price'>${(item.price).toLocaleString(undefined, {minimumFractionDigits:2})}</span>
                <span className='desc'>{item.desc}</span>
                
            </label>;
          })}
    </div>
  )
}

export default OtherServices;