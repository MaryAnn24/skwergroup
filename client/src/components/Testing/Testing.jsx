import { useState } from "react";
import Axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from "react-phone-number-input";
// import ar from 'react-phone-number-input/locale/ar'
import '../ClientDetails/ClientDetails.css';


function Testing() {
   // const [listPackages, setlistPackages] = useState([]);
    // useEffect(() => {
    //   Axios.get("https://skwergroupapi.kicklaced.com/getPackages").then((response) => {
    //     setListOfUsers(response.data);
    //   });
    // }, []);

    const [c_num, setCNum] = useState();
  
    const getData = () => {
      Axios.get("https://localhost:3002/getData").then((response) => {
        //setlistPackages(response.data);
        console.log(response.data);
      });
      //console.log(listPackages);
    };

    const publishableKey = "pk_test_51LxV0VHy5jodEtzYJKTNcEC16U8FbvAjDlq7iJ5bUIhQTAYmMabixF29xPJnP6SNkYlEt3J5t7SdKqZuLtULwkLg009bSzCj2i";

    const priceForStripe = 120*100;

    const handleSuccess = () => {
       console.log('success');
    }

    const handleError = () => {
        console.log('error');
      }

    const payNow = async token => {
        try {
          const response = await Axios({
            url:'http://localhost:3002/payment',
            method: 'post',
            data: {
              name: 'Test Meann',
              amount: priceForStripe,
              token,
            }
          });
          if(response.status === 200) {
            handleSuccess();
            console.log('Your payment was successful');
          }
          
        } catch (error) {
          handleError();
          console.log(error);
        }
    }

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  
  const addData = () => {
    Axios.post("https://skwerapi.skwergroup.com/addData", {
      jurisdiction: "Canada",
      c_name1: "Sample",
      type_1: "Sample",
      c_name2: "Sample",
      type_2: "Sample",
      c_name3: "Sample",
      type_3: "Sample",
      skwer_package: "Sample",
      add_serv: "Sample",
      p_name: "Sample",
      email: "Sample",
      address: "Sample",
      contact_no: "Sample",
      package_price: 100,
      add_serv_price: 100,
      payment_remarks: "success",
      dateCreated: date + ' ' + time,
      dateUpdated: date + ' ' + time
    }).then(() => {
      console.log("sucess");
    });
  };
  
    return (
      <div className="App">
        <button onClick={getData}>Show Data</button>
        <button onClick={addData}>Save Data</button>
        <div className="usersDisplay">
          {/* {listPackages.map((val, key) => {
            return (
              <div key={val._id}>
                <h1>Name: {val.jurisdiction}</h1>
                <h1>Price: {val.c_name1}</h1>
              </div>
            );
          })} */}

            <StripeCheckout
                stripeKey={publishableKey}
                label='Testing Make Payment'
                name='Pay With Credit Card'
                billingAddress
                shippingAddress
                amount={priceForStripe}
                description={`Your order amount is $${priceForStripe}`}
                token={payNow}
              />
        </div>
        <div>
          <PhoneInput 
            className="phoneInput"
            // labels={ar}
            international
            defaultCountry = "AE"
            value={c_num}
            onChange={c_num=>setCNum(c_num)} 
          />
          Is this number possible : {" "} 
          {c_num&& isPossiblePhoneNumber(c_num) ? "Yes it is" : "No it is not"}
          <br />
          Is this VALID in this country : {" "} 
          {c_num&& isValidPhoneNumber(c_num) ? "Yes it is" : "No it is not"}
          <br />
          Local phone number : {" "} 
          {c_num&& formatPhoneNumber(c_num)}
          <br />
          International phone number : {" "} 
          {c_num&& formatPhoneNumberIntl(c_num)}
        </div>
      </div>
    );
}

export default Testing