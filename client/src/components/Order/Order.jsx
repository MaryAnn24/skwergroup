import React, { useState } from 'react';
import './Order.css';
import StripePic from '../../assets/images/card-stripe.svg';
import Axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { bankData } from '../OtherServices/BankServ';
import { servData } from './AddServ'; 

const MySwal = withReactContent(Swal);

function Order({formData, setFormData, checkAgreement, setCheckAgreement, page, setPage, fields}) {

  /* VARIABLE DECLARATIONS */
  const serv = formData.add_serv;
  console.log(formData);

  /* ADDITIONAL SERVICES DATA */
  /*const servData = [
      {id: 2, service: "Company Seal", desc:"", price: 150, remarks: "active"},
      {id: 3, service: "Notarisation on Documents", desc:"", price: 200, remarks: "active"},
      {id: 4, service: "Apostille on Documents", desc:"", price: 220, remarks: "active"},
      {id: 5, service: "Professional Directors", desc:"", price: 1100, remarks: "active"},
      {id: 6, service: "Professional Shareholders", desc:"", price: 1100, remarks: "active"},
      {id: 7, service: "Power(s) of Attorney", desc:"", price: 250, remarks: "active"},
      {id: 8, service: "Notarisation and Apostille on Documents", desc:"", price: 300, remarks: "active"},
      {id: 10, service: "Company Secretary", desc:"", price: 790, remarks: "active"},
      {id: 11, service: "VAT number", desc:"", price: 1000, remarks: "active"},
      {id: 12, service: "EIN & Physical Address", desc:"Employer Identification Number ($790.00) + Physical Address ($1580.00)", price: 2370, remarks: "active"},
      {id: 13, service: "Visual Branding Pack", desc:"(Company Logo + Business Card +  Letter Head)", price: 400, remarks: "active"},
      {id: 14, service: "Website Pack", desc:"(1 Year Website Domain + 1 Year Website Hosting +  One Page Website Building)", price: 1000, remarks: "active"},
      {id: 15, service: "1mo. Digital Marketing Support", desc:"", price: 300, remarks: "active"},
      {id: 16, service: "3mo. Digital Marketing Support", desc:"", price: 750, remarks: "active"},
      {id: 17, service: "6mo. Digital Marketing Support", desc:"", price: 1500, remarks: "active"},
      {id: 18, service: "12mo. Digital Marketing Support", desc:"", price: 3000, remarks: "active"},
      {id: 19, service: "International Courier", desc:"", price: 90, remarks: "active"},
      {id: 20, service: "Creation of Company Logo; Business Card; and Letter Head", desc:"", price: 200, remarks: "active"},
  ];*/

  var total_serv = 0;
  var total_bank = 0;
  var package_amt = formData.package_price;

  const add_serv = formData.add_serv;

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

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
  
  /* DATABASE AXIOS */
  const addData = () => {
    Axios.post("http://localhost:3001/saveData", {
      or_no: formData.or_no,
      jurisdiction: formData.jurisdiction,
      c_name1: formData.c_name1,
      type_1: formData.type_1,
      c_name2: formData.c_name2,
      type_2: formData.type_2,
      c_name3: formData.c_name3,
      type_3: formData.type_3,
      skwer_package: formData.package,
      bank: formData.bank,
      add_serv: add_serv,
      salutation: formData.salutation,
      f_name: formData.f_name,
      l_name: formData.l_name,
      email: formData.email,
      p_street: formData.p_street,
      p_city: formData.p_city,
      p_state: formData.p_state,
      p_zip: formData.p_zip,
      p_country: formData.p_country,
      contact_no: formData.contact_no,
      package_price: formData.package_price,
      add_serv_price: formData.add_serv_price,
      bank_serv_price: formData.bank_serv_price,
      regis_remarks: "registered",
      payment_remarks: "success",
      dateCreated: date + ' ' + time,
      dateUpdated: date + ' ' + time
    }).then(() => {
      console.log("sucess");
    });
  };
  /* END */

  /* STRIPE PAYMENT */
  const publishableKey = "pk_test_51LxV0VHy5jodEtzYJKTNcEC16U8FbvAjDlq7iJ5bUIhQTAYmMabixF29xPJnP6SNkYlEt3J5t7SdKqZuLtULwkLg009bSzCj2i";

  var total_charge = formData.package_price + formData.add_serv_price + formData.bank_serv_price;

  const priceForStripe = total_charge*100;

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 1000,
    });
  }

  const handleError = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 1000,
    });
  }

  
  
  const payNow = async token => {
    try {
      const response = await Axios({
        url:'http://localhost:3001/payment',
        method: 'post',
        data: {
          name: formData.f_name + ' ' + formData.l_name,
          amount: total_charge * 100,
          token,
        }
      });
      if(response.status === 200) {
        handleSuccess();
        console.log('Your payment was successful');
        addData();
        setPage(0);
        setFormData(fields);
      }
      
    } catch (error) {
      handleError();
      console.log(error);
    }
  } /* END */

  /* CHECKBOX/MAKEPAYMENT APPEAR */
  const [btnActive, setActive] = useState("block");
  const [btnStripe, setBtnStripe] = useState("deactivate");

  const activePay = () => {
    if(btnActive === "block") {
      setActive("none");
      setBtnStripe('active');
    }else {
      setActive("block");
      setBtnStripe('deactivate');
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
    <div>
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
                <li>
                  {/* <p>{formData.add_serv}</p> */}
                  {/* {serv.map((item) => {
                      return <p>{item}</p>;
                  })} */}
                </li>
                {servData.map((data) => {
                      return <span>
                        {serv.map((item, index) => {
                            if(item===data.service) {
                              //'EQUAL';
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
                  {/* {serv.map((item) => {
                     
                      return <span>{item}</span>;
                  })} */}

                  {servData.map((data) => {
                      return <span>
                        {serv.map((item, index) => {
                            if(item===data.service) {
                              //'EQUAL';
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
                  /*====DOUBLE CHECK AND DELETE=== */
                  /*console.log(checkAgreement);*/
                  //setCheckAgreement(!checkAgreement);
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
          <div className='grid grid__2 total'>
            <div className={'stripe__btn ' + btnStripe}>
              <div className={'box ' + btnActive}></div>
              <StripeCheckout
                stripeKey={publishableKey}
                label='Make Payment'
                name='Pay With Credit Card'
                billingAddress
                shippingAddress
                amount={priceForStripe}
                description={`Your order amount is $${package_amt + total_serv + total_bank}`}
                token={payNow}
              />
            </div>
            <div className="stripe">
              <img src={StripePic} alt="stripe_logo" />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )

}

export default Order;