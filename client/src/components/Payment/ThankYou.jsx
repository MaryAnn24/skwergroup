import React from 'react';
import './ThankYou.css';
import ThankyouLogo from '../../assets/images/icons/check.png';
import SkwerIcon from '../../assets/images/icons/skwer_logo.svg';

function ThankYou ({sample, formData}){

  
  const queryParameters = new URLSearchParams(window.location.search);
  const juris = queryParameters.get("j");
  const price = queryParameters.get("p");

  const class_Name = {class: "ThakyouPage", id: 'IDThankYouPage', j: juris, p: price};
  console.log(class_Name);

  return (
    <div className='thank_div'>
        <section>
            <img className='logo' src={SkwerIcon} alt="" />
            <h1 className='ThankYouPage' id='ThankYouPage'>Thank you!</h1>
            <img src={ThankyouLogo} alt="" />
            <p>Your order was completed successfully.</p>
            <p>An email confirmation including the details about your order has been sent to the email address provided. Please keep it for your record. An account manager will be assigned to your order and will get in touch with you within the next 24 working hour.</p>
            <a href="https://skwergroup.com/" className='btn'>BACK TO HOME PAGE</a>
        </section>
    </div>
  )
}

export default ThankYou