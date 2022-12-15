import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

import Axios from 'axios';

function Payment({formData, setFormData}) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  var total_charge = formData.package_price + formData.add_serv_price + formData.bank_serv_price;

  

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  const payNow = async () => {
    try {
      const response = await Axios({
        url:'http://localhost:3001/create-payment-intent', /* 'https://api.skwergroup.com/payment' */
        method: 'post',
        data: {
          fullname: 'hi',
          amount: 1000,
        }
      });


      if(response.status === 200) {
        //handleSuccess();
        //console.log('Your payment was successful');
        //addData();
        //setPage(0);
        //setFormData(fields);
      }
      
    } catch (error) {
      //handleError();
      //console.log(error);
    }
    
  }

  // payNow();

  useEffect(() => {
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   body: JSON.stringify({'status': 200})
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    //   setClientSecret(clientSecret);
    //   //console.log(clientSecret);
    // });
    fetch('/create-payment-intent2', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({'hello': 200,})
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
  }, []);




  

  return (
    <>
      <h1>Stripe Payment Page</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
