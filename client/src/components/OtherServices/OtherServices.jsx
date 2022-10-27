import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './ServicesData';
import './OtherServices.css';

function OtherServices ({formData, setFormData}) {
  // console.log(formData);
  const [service, setService] = useState([]);

  const [item, setItem] = useState({remarks: 'active'});


  //console.log(formData.add_serv);
  const [arr, setArr] = useState([formData.add_serv]);
  console.log(arr);
  

  useEffect(() => {
    if(item.remarks === 'active'){
      setService(getData);
    } else {
      /* Filter condition hear */
      setItem({remarks: 'active'});
    }

  }, [item]);
  //var checkMark = "";
  //const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  // const renderList = arr.map((item) => 
  //   <div>{item}</div>
  // );

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
            //  if (arr.includes('item.id')) {
            //   checkMark = "checked"
            // }else {
            //   checkMark = ""
            // }
      
            return <label key={item.id}>        
              <input className='form-control checkbox' 
                type="checkbox" 
                name="c_name1"
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
                      // setFormData({
                      //   ...formData, amount: formData.amount-item.price
                      // });
                    } else {
                      setArr((oldArray) => [...oldArray, item.id]);
                      // setFormData({
                      //   ...formData, amount: formData.amount+item.price
                      // });
                    }
                    formData.add_serv = arr;
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