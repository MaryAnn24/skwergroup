import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from './ServicesData';
import { bankData } from './BankServ';

import './OtherServices.css';

function OtherServices ({formData, setFormData}) {

  console.log(bankData);
  /* VARIABLES DECLARATION */
  const [service, setService] = useState(getData);
  const [item, setItem] = useState({remarks: 'active'});
  /* const myJSON = JSON.stringify(arr); */

  //var inclusion = ["Company Rubber Stamp", "Company Seal"];

  var inclusion = (formData.package) === "plus" ? ["Company Rubber Stamp", "Company Seal", "Notarisation and Apostille on Documents"] : (formData.package) === "premium" ? ["Company Rubber Stamp", "Company Seal", "Notarisation and Apostille on Documents", "International Courier", "Creation of Company Logo; Business Card; and Letter Head"] : [];
  //formData.add_serv = inclusion;
  // console.log(inclusion);

  //never do this... setFormData({...formData, add_serv: [1]});
  
  /*const handleChange = () => {
    const cyprus_serv = ['Company Secretary', "VAT number"];
    if(formData.jurisdiction === "Cyprus") {
      setFormData({
        ...formData, add_serv: cyprus_serv
      });
    } 

    console.log(formData.add_serv);
  }*/

  /*if(formData.jurisdiction === "Cyprus") {
    formData.add_serv = ['Company Secretary', "VAT number"];
  } */

  const [checked, setChecked] = useState(formData.add_serv);
    /* Add/Remove checked item from list */
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
      console.log(updatedList2);
    }; /* END */

  

  return (
    <div>
      <div className='add__services grid grid__4'  >
            {service.map((item, index) => {
              return <label key={index} className={(formData.jurisdiction !== "Cyprus") && ((item.service === "Company Secretary") || (item.service === "VAT number")) ? "hide_serv" : ((item.service === "EIN & Physical Address") && ((formData.jurisdiction !== "Florida") && (formData.jurisdiction !== "Delaware")) ) ? "hide_serv" : "display"}>
                <div className='serv_box grid'>
                  <span className='icon'><img src={item.icon} alt="stamp_icon" /></span>
                
                <input className='form-control checkbox' 
                  type="checkbox" 
                  name="c_name1"
                  disabled = {(inclusion.includes((item.service).toString()) || ((item.service === "Company Secretary") || (item.service === "VAT number")))}
                  onChange={handleCheck} checked = {(formData.add_serv.includes((item.service).toString()) || inclusion.includes((item.service).toString()) )} 
                  value= {item.service}
                  />
                  {/* ({item.price }).toLocaleString(undefined, {minimumFractionDigits:2}) */}
                  </div>
                  <p className='serv_name'>{item.service}</p>
                  <span className='serv_price'>${((formData.jurisdiction === "Cyprus") && ((item.service === "Professional Directors") || (item.service === "Professional Shareholders"))) ? (item.price + 480).toLocaleString(undefined, {minimumFractionDigits:2}) : item.price.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
                  <span className='desc'>{item.desc}</span>
              </label>;
            })}
      </div>
      <h3>Bank Services</h3>
      <div className='add__services grid grid__4'  >
            {bankData.map((item, index) => {
              return <label key={index} className={item.jurisdiction.includes(formData.jurisdiction) ? "display" : "none"}>
                <div className='serv_box grid'>
                  <span className='icon'><img src={item.icon} alt="stamp_icon" /></span>
                
                <input className='form-control checkbox' 
                  type="checkbox" 
                  name="c_name1"
                  
                  onChange={handleCheck2} checked = {(formData.bank).includes(item.bank)} 
                  value= {item.bank}
                  />
                  {/* ({item.price }).toLocaleString(undefined, {minimumFractionDigits:2}) */}
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