import React from 'react';
import './Order.css';
import StripePic from '../../assets/images/card-stripe.svg';
//import { getData } from '../OtherServices/ServicesData';
import Axios from "axios";
// import { useState } from 'react';

function Order({formData, setFormData, checkAgreement, setCheckAgreement}) {
  
  const serv = formData.add_serv;
  //var checkAgree = 0;

  //const servData = getData;
  // const [servData, setservData] = useState([getData]);

  const servData = [
    {id: 1, service: "Company Rubber Stamp", desc:"", price: 70, remarks: "active"},
    {id: 2, service: "Company Seal", desc:"", price: 150, remarks: "active"},
    {id: 3, service: "Notarisation on Documents", desc:"", price: 200, remarks: "active"},
    {id: 4, service: "Apostille on Documents", desc:"", price: 220, remarks: "active"},
    {id: 5, service: "Nominee Director", desc:"", price: 550, remarks: "active"},
    {id: 6, service: "Nominee Shareholder", desc:"", price: 550, remarks: "active"},
    {id: 7, service: "Power(s) of Attorney", desc:"", price: 200, remarks: "active"},
    {id: 8, service: "International Courier", desc:"", price: 80, remarks: "active"},
    {id: 9, service: "TIN number", desc:"", price: 250, remarks: "active"},
    {id: 10, service: "Visual Branding Pack", desc:"(Company Logo + Business Card +  Letter Head)", price: 250, remarks: "active"},
    {id: 11, service: "Website Pack", desc:"(1 Year Website Domain + 1 Year Website Hosting +  One Page Website Building)", price: 500, remarks: "active"},
    {id: 12, service: "1mo. Digital Marketing Support", desc:"", price: 150, remarks: "active"},
    {id: 13, service: "3mo. Digital Marketing Support", desc:"", price: 380, remarks: "active"},
    {id: 14, service: "6mo. Digital Marketing Support", desc:"", price: 720, remarks: "active"},
    {id: 15, service: "12mo. Digital Marketing Support", desc:"", price: 1350, remarks: "active"},
];

  var total_serv = 0;
  var package_amt = formData.package_price;

  const jurisdiction = "Canada";
  const p_name = "Mary";
  const email = "text@gmail.com";


  const addData = () => {
    // setJurisdiction("Canada");
    // setPName("Test");
    // setEmail("test@gmail.com");

    // Axios.post("http://localhost:3001/saveData", {
    //     jurisdiction: jurisdiction,
    //       p_name: p_name,
    //       email: email,
      
    // }).then(() => {
    //   setRegistration([
    //     ...registration,
    //     {
    //       jurisdiction: jurisdiction,
    //       p_name: p_name,
    //       email: email,
    //     },
    //   ]);

      
    // });

    //console.log(jurisdiction);

    Axios.post("http://localhost:3001/saveData", {
      jurisdiction: jurisdiction,
      p_name: p_name,
      email: email
    }).then(() => {
            console.log("sucess");
    });

    //console.log(registration);
  };

  


  return (
    <div>
      <button onClick={addData}>Add DATA</button>
      <div className='grid grid__2 grid__left'>
        <div className='order'>
          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>CONTACT PERSON</p>
              <ul>
                <li>Name:</li>
                <li>Email:</li>
                <li>Phone Number:</li>
              </ul>
            </div>
            <div className="order__right">
              <p>Data</p>
              <ul>
                <li>{formData.p_name}</li>
                <li>{formData.email}</li>
                <li>{formData.contact_no}</li>
              </ul>
            </div>

          </div>

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

          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>COMPANY PACKAGE</p>
              <ul>
                <li>Package - {formData.package}</li>
                <li>+ Incorporation fee</li>
                <li>+ One time banking support</li>
              </ul>
            </div>
            <div className="order__right">
              <p>Price</p>
              <ul>
                <li>${package_amt}</li>
                <li>0</li>
                <li>0</li>
              </ul>
            </div>

          </div>

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
                        {serv.map((item) => {
                            if(item===data.id) {
                              //'EQUAL';
                              total_serv = total_serv + data.price;
                              return <li>{data.service}</li>;
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
                        
                        {serv.map((item) => {
                            if(item===data.id) {
                              //'EQUAL';
                              return <li>${data.price}</li>;
                            }
                            return "";
                        })}
                      </span>;
                  })}
              </ul>
            </div>

          </div>
    
            
            {/* <p>Select Payment (Stripe API) / Receive Payment / Notify client via Email (invoice if possible)</p> */}
        </div>

        <div className='payment__method'>
          <div className='total'>
            <h3>Total: <span className='amount'>${total_serv + package_amt}</span></h3>
          </div>
          <div className="stripe">
            <a href="#stripe"><img src={StripePic} alt="stripe_logo" /></a>
          </div>
        </div>
      </div>
      <div className='order__left agreement'>
        <label>
          <input type="checkbox" className="form-control checkbox" 
            onClick={() => {
              /*console.log(checkAgreement);*/
              setCheckAgreement(!checkAgreement);
            }}/>
          <p class="m-0" >I confirm that I have read, understood and agreed to all terms and conditions in
            <a href="#hi" target="_blank"> Terms</a> &amp; 
            <a href="#hi" target="_blank"> Policy</a> and 
            <a href="#hi" target="_blank"> Refund Policy</a> at BBCIncorp.com
          </p>
        </label>
      </div>
    </div>
    

    
  )
}

export default Order