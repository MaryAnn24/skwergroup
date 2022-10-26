import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './ServicesData';
import './OtherServices.css';

function OtherServices ({formData, setFormData}) {
  const [service, setService] = useState([]);

  const [item, setItem] = useState({remarks: 'active'});

  const [arr, setArr] = useState([formData.add_serv]);

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
          value={formData.add_serv}
         
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
                    setArr((oldArray) => [...oldArray, item.id]);
                    setFormData({
                      ...formData, amount: formData.amount+item.price
                    });
                    
                    formData.add_serv = arr;
                    
                    // //console.log(formData.add_serv)
                    // if(arr.includes(item.id)) {
                    //   console.log('meron');
                    //   //setArr(arr.filter((fruit) => fruit.id !== 1));
                    //   // setArr((products) => products.filter((_, index) => index !== 0));
                    //   console.log(arr.slice(1));
                    // } else {
                    //   console.log('wala');
                    // }
                  }

                }

                />{item.service} (${item.price})
                <span className='desc'>{item.desc}</span>
            </label>;
          })}
      <p className=''>
          {formData.add_serv = arr}
      </p> 
         
    </div>
  )
}

export default OtherServices