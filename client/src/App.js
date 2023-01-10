import './App.css';
import React, {useState} from 'react';
import Form from './components/Form/Form';
import Completion from "./components/Payment/Completion";
// import Testing from './components/Testing/Testing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankYou from './components/Payment/ThankYou';

function App() {

  const [sample, setSample] = useState("teating");
  const fields = {
    or_no: 0,
    jurisdiction: "",
    c_name1: "",
    type_1: "Limited",
    c_name2: "",
    type_2: "Limited",
    c_name3: "",
    type_3: "Limited",
    package: "",
    bank: [],
    add_serv: [],
    salutation: "Mr.",
    f_name: "",
    l_name: "",
    email: "",
    nationality: "",
    bdate: "",
    p_street: "",
    p_city: "",
    p_state: "",
    p_zip: "",
    p_country: "",
    contact_no: "",
    package_price: 0,
    add_serv_price: 0,
    bank_serv_price: 0
  };

  const [formData, setFormData] = useState(fields);
  
  return (
    <>
      {/* <Testing /> -  /order-online */}
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Form formData={formData} setFormData={setFormData} fields={fields} />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/thankyou" element={<ThankYou sample={sample} formData={formData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
