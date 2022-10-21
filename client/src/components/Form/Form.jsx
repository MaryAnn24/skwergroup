import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Jurisdiction from '../Jurisdiction/Jurisdiction';
import NameType from '../NameType/NameType';
import SkwerPackages from '../SkwerPackages/SkwerPackages';
import OtherServices from '../OtherServices/OtherServices';
import ClientDetails from '../ClientDetails/ClientDetails';
import Order from '../Order/Order';

import './Form.css';

function Form() {
  const FormTitles = ["Select Country", "Company name and company type", "Select Packages", "Additional Services", "Basic Details", "Order Summary"]
  const BodyContent = [<Jurisdiction />, <NameType />, <SkwerPackages />, <OtherServices />, <ClientDetails />, <Order /> ];

  const [page, setPage] = useState(0);

  return (
    <div>
        <Header />

        {/* Progress bar */}
        <div className="progress__bar">
        </div>

        {/* Multi form */}
        <div className="form___container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">
            {BodyContent[page]}
          </div>
          <div className="footer">
            <button 
              disabled = {page === 0}
              onClick = {() => {
                setPage((currPage) => currPage - 1);
              }}>
              Back
            </button>
            <button
              onClick = {() => {
                if (page === FormTitles.length - 1) {
                  alert("Make Payment");
                
                  console.log("Data here");
                } else {
                  setPage((currPage) => currPage + 1);
                }
                
              }}
            >
              {page === FormTitles.length - 1 ? "Make Payment" : "Next" }
            </button>
          </div>
        </div>

       <Footer />
        
    </div>
  )
}

export default Form