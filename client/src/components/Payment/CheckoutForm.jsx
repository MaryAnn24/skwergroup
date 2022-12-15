import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Axios from 'axios';

export default function CheckoutForm({formData, setFormData}) {
  /* VARIABLE DECLARATIONS */
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
  const addData = () => { /* http://localhost:3001 */
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
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('hi');

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `http://localhost:3000/completion`,
      },
      
    }).then(
      addData()
    );

    // if (error) {
    //   alert('error');
    // }else {
    //   alert('save');
    // }

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
