import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './ServicesData';
import './OtherServices.css';

function OtherServices ({formData, setFormData}) {
  /* VARIABLES DECLARATION */
  const [service, setService] = useState([]);
  const [item, setItem] = useState({remarks: 'active'});
  const [arr, setArr] = useState([formData.add_serv]);
  
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
          {service.map((item) => {
            /*==== TO BE CONTINUE === */
            //  if (arr.includes('item.id')) {
            //   checkMark = "checked"
            // }else {
            //   checkMark = ""
            // }
      
            return <label key={item.id}>
              <div className='serv_box grid'>
                <span className='icon'><img src={item.icon} alt="stamp_icon" /></span>
              
              <input className='form-control checkbox' 
                type="checkbox" 
                name="c_name1"
                /*==== TO BE CONTINUE === */
                // onLoad={() => {
                //    if (arr.includes('item.id')) {
                //       checkMark = "checked";
                //     }else {
                //       checkMark = "not";
                //     }
                //     return checkMark;
                // }}
                value={item.id}

                onClick={
                  () => {
                    if(arr.includes(item.id)) {
                      setArr(current =>
                        current.filter(services => {
                          return services !== item.id;
                        }),
                      );
                      setFormData({
                        ...formData, add_serv_price: formData.add_serv_price-item.price
                      });
                      
                    } else {
                      setArr((oldArray) => [...oldArray, item.id]);
                      setFormData({
                        ...formData, add_serv_price: formData.add_serv_price+item.price
                      });
                    }
                    formData.add_serv = arr;
                  }

                }
                />
                </div>
                <p className='serv_name'>{item.service}</p>
                <span className='serv_price'>${item.price}</span>
                <span className='desc'>{item.desc}</span>
                
            </label>;
          })}
      <p className='none'>
          {formData.add_serv = arr}
      </p> 
         
    </div>
  )
}

export default OtherServices;