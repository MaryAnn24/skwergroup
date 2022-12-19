import React from 'react';
import { countryData } from '../Jurisdiction/Country_data';
import './NameType.css';

const NameType = ({formData, setFormData}) => {
  /* VARIABLES DECLARATION */

  const c_type = countryData;

  var juris_type = [];

  c_type.map((item) => {
    if(item.country === formData.jurisdiction){
      juris_type = item.type;
    }
    return "";
  });

  return (
    <div className='name__type'>
      {/* FIRST COMPANY NAME */}
      <div className='grid grid__2'>
        <div className='inline__grid'>
          <input className='form-control'
            type="text" 
            placeholder='Company name'
            name="c_name1"
            value={formData.c_name1}
            onChange={(event) => setFormData({
                ...formData, c_name1: event.target.value
            })}
          />
          <span className='error'>{formData.c_name1 === "" ? " * Required " : "" }</span>
        </div>
        <select name="type_1" className='form-control'
          onChange={(event) => setFormData({
            ...formData, type_1: event.target.value
          })}
          value={formData.type_1}
        >
          <option>-- SELECT --</option>

          {juris_type.map((item2) => {
            return <option value={item2} key={item2} >{item2}</option>;
          })}
        </select>
      </div>
      {/* SECOND COMPANY NAME */}
      <div className='grid grid__2'>
        <div className='inline__grid'>
          <input className='form-control'
            type="text" 
            placeholder='Company name' 
            name="c_name2"
            value={formData.c_name2}
            onChange={(event) => setFormData({
                ...formData, c_name2: event.target.value
            })}
          />
          <span className='error'>{formData.c_name2 === "" ? " * Required " : "" }</span>
        </div>
        <select name="type_1" id="" className='form-control'
          onChange={(event) => setFormData({
            ...formData, type_2: event.target.value
          })}
          value={formData.type_2}
        >
          <option>-- SELECT --</option>
          {juris_type.map((item2) => {
            return <option value={item2} key={item2}>{item2}</option>;
          })}
        </select>
      </div>
      {/* THIRD COMPANY NAME */}
      <div className='grid grid__2'>
        <div className='inline__grid'>
          <input className='form-control'
            type="text" 
            placeholder='Company name' 
            name="c_name3"
            value={formData.c_name3}
            onChange={(event) => setFormData({
                ...formData, c_name3: event.target.value
            })}
          />
          <span className='error'>{formData.c_name3 === "" ? " * Required " : "" }</span>
        </div>
        <select name="type_3" id="" className='form-control'
          onChange={(event) => setFormData({
            ...formData, type_3: event.target.value
          })}
          value={formData.type_3}
        >
          <option>-- SELECT --</option>
          {juris_type.map((item2) => {
            return <option value={item2} key={item2} >{item2}</option>;
          })}
        </select>
      </div>
    </div>
  )
}

export default NameType;