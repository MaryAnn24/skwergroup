import React, { useState, useEffect } from 'react';
import './Order.css';
import StripePic from '../../assets/images/card-stripe.svg';
import Axios from 'axios';

import { bankData } from '../OtherServices/BankServ';
import { servData } from './AddServ';

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function Order({formData, setFormData}) {

  /* VARIABLE DECLARATIONS */
  const serv = formData.add_serv;

  var total_serv = 0;
  var total_bank = 0;
  var package_amt = formData.package_price;

  /* OR NO */
  var or_no_temp = 0;
  function Random() {
    var maxNumber = 99;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    var randomNumber2 = Math.floor((Math.random() * maxNumber) + 1);
    var today = new Date();
    var date = today.getFullYear();
    var final = date.toString().substring(2);
    or_no_temp = randomNumber+''+randomNumber2+final;
    
    return or_no_temp;
  }
  formData.or_no =  formData.or_no !== 0 ? formData.or_no : Random();
  /* END  OR NO */

  var total_charge = formData.package_price + formData.add_serv_price + formData.bank_serv_price;

  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  
  const dataOrder = {
    fname: formData.f_name + ' ' + formData.l_name,
    amount: /*total_charge*/ 1 * 100,

  }

  const handleCheckout = () => { /*  https://api.skwergroup.com */
    Axios.post('http://localhost:3001/orderPay', {
      dataOrder,
    }).then((res) => {
      if(res.data.message) {
        /* console.log(res.data.message); */
        setClientSecret(res.data.message);
      }
    })
  }

  /* CHECKBOX/MAKEPAYMENT APPEAR */
  const [btnStripe, setBtnStripe] = useState("deactivated");

  const activePay = () => {
    if(btnStripe === "deactivated") {
      setBtnStripe('activated');
    }else {
      setBtnStripe('deactivated');
    }
  } /* END */

  /* CALCULATE THE TOTAL ADDITIONAL SERVICES */
  servData.map((data) => {
    serv.map((item) => {
        item===data.service ? total_serv = total_serv + data.price : total_serv = total_serv
        return "";
    })

    return total_serv;
  }) /* END */

  /* CALCULATE THE TOTAL BANK SERVICES */
  bankData.map((data) => {
    (formData.bank).map((item) => {
        item===data.bank ? total_bank = total_bank + data.price : total_bank = total_bank
        return "";
    })

    return total_bank;
  }) /* END */

  return (
    <div className='order__page'>
      {/* ORDER SUMMARY */}
      <div className='grid grid__left' 
              onLoad={() => {
                setFormData({
                ...formData, add_serv_price: total_serv, bank_serv_price: total_bank
                });
              }}>
        <div className='order'>
           {/* CLIENT DETAILS */}
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>CONTACT PERSON</p>
              <ul>
                <li>Name:</li>
                <li>Email:</li>
                <li>Phone Number:</li>
                <li>Personal Address:</li>
              </ul>
            </div>
            <div className="order__right">
              <p>__</p>
              <ul>
                <li>{formData.salutation + ' ' + formData.f_name + ' ' + formData.l_name}</li>
                <li>{formData.email}</li>
                <li>{formData.contact_no}</li>
                <li>{formData.p_street + ' ' + formData.p_city + ' ' + formData.p_state + ' (' + formData.p_zip + '), ' + formData.p_country}</li>
              </ul>
            </div>
          </div>
           {/* COMPANY INFO */}
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>COMPANY INFORMATION</p>
              <ul>
                <li>Country of Incorporation:</li>
                <li>Proposed company names:</li>
              </ul>
            </div>
            <div className="order__right">
              <p>__</p>
              <ul>
                <li>{formData.jurisdiction}</li>
                <li>{formData.c_name1} - {formData.type_1}</li>
                <li>{formData.c_name2} - {formData.type_2}</li>
                <li>{formData.c_name3} - {formData.type_3}</li>
              </ul>
            </div>

          </div>
           {/* PACKAGE DETAILS */}
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>COMPANY PACKAGE</p>
              <ul>
                <li>Package - {formData.package}</li>
              </ul>
            </div>
            <div className="order__right">
              <p>Price</p>
              <ul>
                <li>${package_amt.toLocaleString(undefined, {minimumFractionDigits:2})}</li>
              </ul>
            </div>

          </div>
            {/* ADDITIONAL SERVICES */}
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>ADDITIONAL SERVICES</p>
              <ul className='add_serv'>
                {servData.map((data) => {
                      return <span>
                        {serv.map((item, index) => {
                            if(item===data.service) {
                              /* 'EQUAL' */
                              return <li key={index}>{data.service}</li>;
                            }
                            return "";
                        })}
                      </span>;
                  })}
              </ul>
            </div>
            <div className="order__right">
              <p>__</p>
              <ul>
                  {servData.map((data) => {
                      return <span>
                        {serv.map((item, index) => {
                            if(item===data.service) {
                              /* 'EQUAL' */
                              return <li key={index}>${(data.price).toLocaleString(undefined, {minimumFractionDigits:2})}</li>;
                            }
                            return "";
                        })}
                      </span>;
                  })}
              </ul>
            </div>

          </div>
          {/* BANK SERVICES */}
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>BANK SERVICES</p>
              <ul className='add_serv'>
                <li>
                </li>
                {bankData.map((data) => {
                      return <span>
                        {(formData.bank).map((item, index) => {
                            if(item===data.bank) {
                              return <li key={index}>Bank in {data.bank}</li>;
                            }
                            return "";
                        })}
                      </span>;
                  })}
              </ul>
            </div>
            <div className="order__right">
              <p>__</p>
              <ul>
                  {bankData.map((data) => {
                      return <span>
                        {(formData.bank).map((item, index) => {
                            if(item===data.bank) {
                              return <li key={index}>${(data.price).toLocaleString(undefined, {minimumFractionDigits:2})}</li>;
                            }
                            return "";
                        })}
                      </span>;
                  })}
              </ul>
            </div>

          </div>
            {/* TOTAL */}
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>TOTAL</p>
            </div>
            <div className="order__right">
              <h3 className='amount'>${(formData.package_price + formData.add_serv_price + formData.bank_serv_price).toLocaleString(undefined, {minimumFractionDigits:2})}</h3>
            </div>

          </div>
           {/* TERMS CHECKBOX */}
          <div className='order__left agreement'>
            <label>
              <input type="checkbox" className="form-control checkbox" 
                onClick={() => {
                   activePay();
                }}/>
              <p className="m-0" >I confirm that I have read, understood and agreed to all terms and conditions in
                <a href="#hi" target="_blank"> Terms</a> &amp; 
                <a href="#hi" target="_blank"> Policy</a> and 
                <a href="#hi" target="_blank"> Refund Policy</a> at skwergroup.com
              </p>
            </label>
          </div>
           {/* STRIPE */}
          <div className='stripe__btn grid'>
            <div className="stripe">
              <img src={StripePic} alt="stripe_logo" />
            </div>
            <button className={'btn ' + btnStripe} onClick={() => handleCheckout()} >MAKE PAYMENT via STRIPE</button>
            <div className={'stripe__form ' + btnStripe}>
              {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm  formData = {formData} setFormData = {setFormData} />
                </Elements>
              )}
            </div>
          </div> 
        </div>
      </div>
    </div>
  )

}

export default Order;