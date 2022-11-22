import React from 'react';
import { useState } from 'react';
import { getData } from './ServicesData';
import { bankData } from './BankServ';

import './OtherServices.css';

function OtherServices ({formData, setFormData}) {
  /* VARIABLES DECLARATION */
  const [service, setService] = useState(getData);
  /* const myJSON = JSON.stringify(arr); */

  var inclusion = (formData.package) === "plus" ? ["Company Rubber Stamp", "Company Seal", "Notarisation and Apostille on Documents"] : (formData.package) === "premium" ? ["Company Rubber Stamp", "Company Seal", "Notarisation and Apostille on Documents", "International Courier", "Creation of Company Logo; Business Card; and Letter Head"] : [];

  const [checked, setChecked] = useState(formData.add_serv);
    /* Add/Remove checked item from list */
    const handleCheck = (event) => {
      var updatedList = [...checked];

      if (event.target.checked) {
        if((event.target.value === "Professional Directors") || (event.target.value === "Professional Shareholders")) {
          updatedList = [...checked, event.target.value , "Power(s) of Attorney"];
        } else {
          updatedList = [...checked, event.target.value];
        }
        
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);

      setFormData({
        ...formData, add_serv: updatedList
      });
    }; /* END */

    const [checked2, setChecked2] = useState(formData.bank);
    /* Add/Remove checked item from list */
    const handleCheck2 = (event) => {
      var updatedList2 = [...checked2];

      if (event.target.checked) {
        updatedList2 = [...checked2, event.target.value];
      } else {
        updatedList2.splice(checked2.indexOf(event.target.value), 1);
      }
      setChecked2(updatedList2);

      setFormData({
        ...formData, bank: updatedList2
      });
      
    }; /* END */

  return (
    <div>
      <div className='add__services grid grid__4'>{/* ADDITIONAL SERVICES */}
            {service.map((item, index) => {
              return <label key={index} className={(formData.jurisdiction !== "Cyprus") && ((item.service === "Company Secretary") || (item.service === "VAT number")) ? "hide_serv" : ((item.service === "EIN & Physical Address") && ((formData.jurisdiction !== "Florida") && (formData.jurisdiction !== "Delaware")) ) ? "hide_serv" : "display"}>
                <div className='serv_box grid'>
                  <span className='icon'><img src={item.icon} alt="stamp_icon" /></span>
                
                <input className='form-control checkbox' key={index}
                  type="checkbox" 
                  name="c_name1"
                  disabled = {(inclusion.includes((item.service).toString()) || ((item.service === "Company Secretary") || (item.service === "VAT number")))}
                  onChange={handleCheck} checked = {(formData.add_serv.includes((item.service).toString()) || inclusion.includes((item.service).toString()) )} 
                  value= {item.service}
                  />
                  </div>
                  <p className='serv_name'>{item.service}</p>
                  <span className='serv_price'>${((formData.jurisdiction === "Cyprus") && ((item.service === "Professional Directors") || (item.service === "Professional Shareholders"))) ? (item.price + 480).toLocaleString(undefined, {minimumFractionDigits:2}) : item.price.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
                  <span className='desc'>{item.desc}</span>
              </label>;
            })}
      </div>
      <h3>Bank Services</h3>
      <div className='add__services grid grid__4'>{/* BANK SERVICES */}
            {bankData.map((item, index) => {
              return <label key={index} className={item.jurisdiction.includes(formData.jurisdiction) ? "display" : "none"}>
                <div className='serv_box grid'>
                  <span className='icon'><img src={item.icon} alt="stamp_icon" /></span>
                
                <input className='form-control checkbox' key={index}
                  type="checkbox" 
                  name="c_name1"
                  
                  onChange={handleCheck2} checked = {(formData.bank).includes(item.bank)} 
                  value= {item.bank}
                  />
                  </div>
                  <p className='serv_name'>Bank in {item.bank}</p>
                  <span className='serv_price'>${item.price.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
                  <span className='desc'>{item.desc}</span>
              </label>;
            })}
      </div>
    </div>
  )
}

export default OtherServices;