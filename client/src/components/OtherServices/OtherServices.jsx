import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './ServicesData';
import './OtherServices.css';

const OtherServices = ({formData, setFormData}) => {
  const [service, setService] = useState([]);

  const [item, setItem] = useState({remarks: 'active'});

  const [arr, setArr] = useState([formData.add_serv1]);

  //const arrServices = ["hi", "hello"];

  useEffect(() => {
    if(item.remarks === 'active'){
      setService(getData);
    } else {
      /* Filter condition hear */
      setItem({remarks: 'active'});
    }

  }, [item]);


  return (
    
    <div className='add__services grid grid__3'>
      <input className='form-control none'
          type="text" 
          placeholder='Company name'
          name="c_name1"
          value={formData.add_serv1}
         
          />
      {/* <p>Additional Hi</p> */}
          {service.map((item) => {
      
            return <label>
              <input className='form-control checkbox' 
                type="checkbox"
                name="c_name1"
                value={formData.c_name1}

                onClick={
                  () => {
                    setArr((oldArray) => [...oldArray, item.id])
                  }

                }

                />{item.service}
                
            </label>;
          })}
      <p className='none'>
          {formData.add_serv1 = arr}
      </p> 
         
    </div>
  )
}

export default OtherServices