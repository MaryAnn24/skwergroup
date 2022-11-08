import React, { useState } from 'react';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from "react-phone-number-input";
import './ClientDetails.css';
import 'react-phone-number-input/style.css';

import { useForm } from "react-hook-form";

function ClientDetails({formData, setFormData}) {

  const phone = formatPhoneNumberIntl(formData.contact_no);
  const [c_num, setCNum] = useState(phone);
  const salutations = ['Mr.', 'Miss', 'Ms.', 'Mrs.', 'Dr.', 'Prof.', 'Sir' ]


    /* Validations */
    function isValidEmail(email) {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(email);
    }

  return (
    <div>
        <div className='inline__grid'>
          <select className="form-control">
            {salutations.map((s_item) => {
              var selected = "";
              if(formData.salutation === s_item) {
              selected = "selected";
              } else {
              selected = "";
              }
              return <option value={s_item} key={s_item} selected={selected} >{s_item}</option>;
            })}
          </select>
          <error>{formData.salutation === "" ? " * Required " : "" }</error>
        </div>
        <div className='inline__grid'>
          <input className='form-control'
            type="text" 
            placeholder='First Name'
            onChange={(event) => {
              setFormData({
              ...formData, f_name: event.target.value
              });
            }}
            value={formData.f_name}

          />
          <error>{formData.f_name === "" ? " * Required " : "" }</error>
        </div>
        
        <div className='inline__grid'>
          <input className='form-control'
            type="text" 
            placeholder='Last Name'
            name="l_name"
            value={formData.l_name}
            onChange={(event) => setFormData({
              ...formData, l_name: event.target.value
            })}
    
          />
          <error>{formData.l_name === "" ? " * Required " : "" }</error>
        </div>
        <br></br>

        <div className='inline__grid'>
          <input className='form-control'
            type="text" 
            placeholder='Email Address'
            name="email"
            value={formData.email}
            onChange={(event) => setFormData({
              ...formData, email: event.target.value
            })}
    
          />
          <error>{formData.email === "" ? " * Required " : !isValidEmail(formData.email) ? " * Invalid Email" : "" }</error>
        </div>

        <div className='inline__grid absolute'>
          <textarea className='form-control' name="address" id="" cols="35" rows="10" placeholder='Company Address '
            onChange={(event) => setFormData({
              ...formData, address: event.target.value
            })}
          >
          {formData.address}

          </textarea>
          <error>{formData.address === "" ? " * Required " : "" }</error>
        </div>
         
        {/* <input className='form-control'
          type="text" 
          placeholder='Your Contact Number'
          name="p_name"
          value={formData.contact_no}
          onChange={(event) => setFormData({
            ...formData, contact_no: event.target.value
          })}
  
        /> */}
        <PhoneInput 
            className="phoneInput"
            // labels={ar}
            international
            defaultCountry = ""
            value={c_num}
            onChange={(c_num) => {
              setCNum(c_num);
              setFormData({
                ...formData, contact_no: formatPhoneNumberIntl(c_num)
              })
            }}
        />

        <error>* Phone Number : {" "} 
          {c_num&& isValidPhoneNumber(c_num) ? <span className='txt_green'> Valid </span> : <span className='txt_red'> Not valid </span> } </error>

    </div>
  )
      
  

}

export default ClientDetails;