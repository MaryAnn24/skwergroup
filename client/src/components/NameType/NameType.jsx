import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './TypeData';

const NameType = ({formData, setFormData}) => {
  const [type, setType] = useState([]);

  const [item, setItem] = useState({remarks: 'active'});

  useEffect(() => {
    if(item.remarks === 'active'){
      setType(getData);
    } else {
      /* Filter condition hear */
      setItem({remarks: 'active'});
    }

  }, [item]);

  return (
    <div>
        <input className='form-control'
          type="text" 
          placeholder='Company name'
          name="c_name1"
          value={formData.c_name1}
          onChange={(event) => setFormData({
              ...formData, c_name1: event.target.value
          })}
        />
        <select name="type_1" id="" className='form-control'
          onChange={(event) => setFormData({
            ...formData, type_1: event.target.value
          })}
        >
          {type.map((item) => {
           
           var selected = "";
           if(formData.type_1 === item.type) {
            selected = "selected";
           } else {
            selected = "";
           }
            return <option value={item.type} key={item.id} selected={selected}>{item.type}</option>;
          })}

        </select><br />

        <input className='form-control'
          type="text" 
          placeholder='Company name' 
          name="c_name2"
          value={formData.c_name2}
          onChange={(event) => setFormData({
              ...formData, c_name2: event.target.value
          })}
        />
        <select name="type_1" id="" className='form-control'
          onChange={(event) => setFormData({
            ...formData, type_2: event.target.value
          })}
        >
          {type.map((item) => {
           
           var selected = "";
           if(formData.type_2 === item.type) {
            selected = "selected";
           } else {
            selected = "";
           }
            return <option value={item.type} key={item.id} selected={selected}>{item.type}</option>;
          })}
        </select><br />

        <input className='form-control'
          type="text" 
          placeholder='Company name' 
          name="c_name3"
          value={formData.c_name3}
          onChange={(event) => setFormData({
              ...formData, c_name3: event.target.value
          })}
        />
        <select name="type_3" id="" className='form-control'
          onChange={(event) => setFormData({
            ...formData, type_3: event.target.value
          })}
        >
          {type.map((item) => {
           
           var selected = "";
           if(formData.type_3 === item.type) {
            selected = "selected";
           } else {
            selected = "";
           }
            return <option value={item.type} key={item.id} selected={selected}>{item.type}</option>;
          })}
        </select><br />
    </div>
  )
}

export default NameType