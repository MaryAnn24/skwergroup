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
    <div className='client__page'>
        <section className='grid grid__3 '>
          <article>
            <select className="form-control"
              onChange={(event) => {
                setFormData({
                ...formData, salutation: event.target.value
                });
              }}
            >
              {salutations.map((s_item, index) => {
                return <option value={s_item} key={index} selected={formData.salutation === s_item} >{s_item}</option>
              })}
            </select>
            <span className='error'>{formData.salutation === "" ? " * Required " : "" }</span>
          </article>
          <article>
            <input className='form-control f_name'
              type="text" 
              placeholder='First Name'
              onChange={(event) => {
                setFormData({
                ...formData, f_name: event.target.value
                });
              }}
              value={formData.f_name}

            />
            <span className='error'>{formData.f_name === "" ? " * Required " : "" }</span>
          </article>
          <article>
            <input className='form-control'
              type="text" 
              placeholder='Last Name'
              name="l_name"
              value={formData.l_name}
              onChange={(event) => setFormData({
                ...formData, l_name: event.target.value
              })}
      
            />
            <span className='error'>{formData.l_name === "" ? " * Required " : "" }</span>
          </article>
        </section>
        <section className='grid grid__2'>
          <article>
            <input className='form-control email'
              type="email" 
              placeholder='Email Address'
              name="email"
              value={formData.email}
              onChange={(event) => setFormData({
                ...formData, email: event.target.value
              })}
      
            />
            <span className='error'>{formData.email === "" ? " * Required " : !isValidEmail(formData.email) ? " * Invalid Email" : "" }</span>
          </article>
          <article>
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
            <span className='error'>* Phone Number : {" "} 
            {c_num&& isValidPhoneNumber(c_num) ? <span className='txt_green'> Valid </span> : <span className='txt_red'> Not valid </span> } </span>
          </article>
        </section>
        {/* COMPANY ADDRESS */}
        <section className='grid'>
          <span>Company Address</span>
          <article>
            <input type="text" className='form-control street' placeholder='Street' 
              value={formData.c_street}
              onChange={(event) => setFormData({
                ...formData, c_street: event.target.value
              })}
            />
            <span className='error'>{formData.c_street === "" ? " * Required " : "" }</span>
          </article>
        </section>
        <section className='grid grid__2'>
          <article>
            {/* <textarea className='form-control' name="address" id="" cols="35" rows="10" placeholder='Company Address ' value= {formData.address}
              onChange={(event) => setFormData({
                ...formData, address: event.target.value
              })}
            ></textarea> */}
            {/* <span className='error'>{formData.address === "" ? " * Required " : "" }</span> */}
            <input type="text" className='form-control' placeholder='City' 
               value={formData.c_city}
               onChange={(event) => setFormData({
                 ...formData, c_city: event.target.value
               })}
            />
            <span className='error'>{formData.c_city === "" ? " * Required " : "" }</span>
          </article>
          <article>
            <input type="text" className='form-control' placeholder='State' 
              value={formData.c_state}
              onChange={(event) => setFormData({
                ...formData, c_state: event.target.value
              })}
            />
            <span className='error'>{formData.c_state === "" ? " * Required " : "" }</span>
          </article>
        </section>
        <section className='grid grid__2'>
          <article>
            <input type="text" className='form-control' placeholder='Zipcode' 
              value={formData.c_zip}
              onChange={(event) => setFormData({
                ...formData, c_zip: event.target.value
              })}
            />
            <span className='error'>{formData.c_zip === "" ? " * Required " : "" }</span>
          </article>
          <article>
            <input type="text" className='form-control' placeholder='Country' 
              value={formData.c_country}
              onChange={(event) => setFormData({
                ...formData, c_country: event.target.value
              })}
            />
            <span className='error'>{formData.c_country === "" ? " * Required " : "" }</span>
          </article>
        </section>

        {/* PERSONAL ADDRESS */}
        <section className='grid'>
          <span>Personal Address</span>
          <article>
            <input type="text" className='form-control street' placeholder='Street'
              value={formData.p_street}
              onChange={(event) => setFormData({
                ...formData, p_street: event.target.value
              })}
            />
            <span className='error'>{formData.p_street === "" ? " * Required " : "" }</span>
          </article>
        </section>
        <section className='grid grid__2'>
          <article>
            <input type="text" className='form-control' placeholder='City' 
              value={formData.p_city}
              onChange={(event) => setFormData({
                ...formData, p_city: event.target.value
              })}
            />
            <span className='error'>{formData.p_city === "" ? " * Required " : "" }</span>
          </article>
          <article>
            <input type="text" className='form-control' placeholder='State' 
              value={formData.p_state}
              onChange={(event) => setFormData({
                ...formData, p_state: event.target.value
              })}
            />
            <span className='error'>{formData.p_state === "" ? " * Required " : "" }</span>
          </article>
        </section>
        <section className='grid grid__2'>
          <article>
            <input type="text" className='form-control' placeholder='Zipcode' 
              value={formData.p_zip}
              onChange={(event) => setFormData({
                ...formData, p_zip: event.target.value
              })}
            />
            <span className='error'>{formData.p_zip === "" ? " * Required " : "" }</span>
          </article>
          <article>
            <input type="text" className='form-control' placeholder='Country' 
              value={formData.p_country}
              onChange={(event) => setFormData({
                ...formData, p_country: event.target.value
              })}
            />
            <span className='error'>{formData.p_country === "" ? " * Required " : "" }</span>
          </article>
        </section>

        {/* <section>
          <article>
            <textarea className='form-control' name="address" id="" cols="35" rows="10" placeholder='Personal Address ' value= {formData.address}
              onChange={(event) => setFormData({
                ...formData, address: event.target.value
              })}
            ></textarea>
            <span className='error'>{formData.address === "" ? " * Required " : "" }</span>
          </article>
        </section> */}

       
         
        {/* <input className='form-control'
          type="text" 
          placeholder='Your Contact Number'
          name="p_name"
          value={formData.contact_no}
          onChange={(event) => setFormData({
            ...formData, contact_no: event.target.value
          })}
  
        /> */}
        

    </div>
  )
      
  

}

export default ClientDetails;