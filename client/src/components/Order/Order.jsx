import React from 'react';
import './Order.css';
import StripePic from '../../assets/images/card-stripe.svg';

function Order({formData, setFormData}) {
  return (
    <div>
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
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>

          </div>

          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>COMPANY INFORMATION</p>
              <ul>
                <li>Country of Incorporation:</li>
                <li>Company Typ:</li>
                <li>Proposed company names:</li>
              </ul>
            </div>
            <div className="order__right">
              <p>Data</p>
              <ul>
                <li>Canada</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>

          </div>

          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>COMPANY PACKAGE</p>
              <ul>
                <li>Package - Premium</li>
                <li>+ Incorporation fee</li>
                <li>+ One time banking support</li>
              </ul>
            </div>
            <div className="order__right">
              <p>Price</p>
              <ul>
                <li>50</li>
                <li>150</li>
                <li>50</li>
              </ul>
            </div>

          </div>

          <div className='grid grid__2 border__gray'>
            <div className="order__left">
              <p>ADDITIONAL SERVICES</p>
              <ul>
                <li>
                  <p>Branding</p>
                  <span>+ Description</span>
                </li>
              </ul>
            </div>
            <div className="order__right">
              <p>Price</p>
              <ul>
              <li>
                  <p>__</p>
                  <span>+ Description</span>
                </li>
              </ul>
            </div>

          </div>
    
            
            {/* <p>Select Payment (Stripe API) / Receive Payment / Notify client via Email (invoice if possible)</p> */}
        </div>

        <div className='payment__method'>
          <div className='total'>
            <h3>Total: <span className='amount'>$1500</span></h3>
          </div>
          <div className="stripe">
            <a href="#stripe"><img src={StripePic} alt="stripe_logo" /></a>
          </div>
        </div>
      </div>
      <div className='order__left agreement'>
        <label >
          <input type="checkbox" className="form-control checkbox" />
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