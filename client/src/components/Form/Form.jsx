import React from 'react';
import { useState } from 'react';

import './Form.css';
import '../Steps/Steps.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Jurisdiction from '../Jurisdiction/Jurisdiction';
import NameType from '../NameType/NameType';
import SkwerPackages from '../SkwerPackages/SkwerPackages';
import OtherServices from '../OtherServices/OtherServices';
import ClientDetails from '../ClientDetails/ClientDetails';
import Order from '../Order/Order';


function Form() {
  const FormTitles = ["Select Country", "Provide Propose Company Name and Company Type", "Select a Package", "Add Additional Services", "Input Your Basic Details", "Your Order Summary"]
 
  const [formData, setFormData] = useState({
    jurisdiction: "",
    c_name1: "",
    type_1: "Limited",
    c_name2: "",
    type_2: "Limited",
    c_name3: "",
    type_3: "Limited",
    package: "",
    add_serv:[0],
    p_name: "",
    email: "",
    address: "",
    contact_no: "",
    package_price: 0,
    add_serv_price: 0,
    remarks: "",
    dateCreated: ""
  });


  const [page, setPage] = useState(0);

  const [checkAgreement, setCheckAgreement] = useState(false);

  const BodyContent = [<Jurisdiction page = {page} setPage={setPage} formData = {formData} setFormData = {setFormData} />, 
  <NameType formData = {formData} setFormData = {setFormData} />, 
  <SkwerPackages page = {page} setPage={setPage} formData = {formData} setFormData = {setFormData}  />, 
  <OtherServices formData = {formData} setFormData = {setFormData}  />, 
  <ClientDetails formData = {formData} setFormData = {setFormData}  />,
  <Order checkAgreement = {checkAgreement} setCheckAgreement = {setCheckAgreement} formData = {formData} setFormData = {setFormData} />];

  var step = 0;

  return (
    <div>
      <Header />
      
      <main>
        <div className="subheader" id="quote"></div>
        <section className='mbt section__bg'>
          <div className='mbt__bottom__shape'>
            <div className="container mbt__container flex">
              {/* LEFT */}
              <div className="mbt__container__left">
                <h2>Request a Quote and Compare prices!</h2>
                <p className="lead">An mei sadipscing dissentiet, eos ea partem viderer facilisi.</p>
                {/* Left Steps */}
                <div className= {`step ${step === page ? "step-active " : null} ${step < page ? "step-done " : ""}` + step} >
                  <div>
                    <div className="circle">
                      {step+1 > page ? step+1 : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Select Country</div>
                    <div className="caption">Add inst. here</div>
                  </div>
                </div>
                <div className={`step ${step+1 === page ? "step-active " : null} ${step+1 < page ? "step-done " : ""}`}
                >
                  <div>
                    <div className="circle" >
                      {(step+1 === page) || (step+1 > page) ? step+2 : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Provide Company Details</div>
                      <div className="caption">Company name and type</div>
                  </div>
                </div>
                <div className={`step ${step+2 === page ? "step-active " : null} ${step+2 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+2 === page) || (step+2 > page) ? step+3 : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Select a Package</div>
                      <div className="caption">Basic | Plus | Premium</div>
                  </div>
                </div>    
                <div className={`step ${step+3 === page ? "step-active " : null} ${step+3 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+3 === page) || (step+3 > page) ? step+4 : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Add additional services</div>
                      <div className="caption">Select as many as you want</div>
                  </div>
                </div>
                <div className={`step ${step+4 === page ? "step-active " : null} ${step+4 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+4 === page) || (step+4 > page) ? step+5 : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Input Your Basic Details</div>
                      <div className="caption">Name | Email | Address | Contact no.</div>
                  </div>
                </div>
                     
                <div className={`step ${step+5 === page ? "step-active " : null} ${step+5 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+5 === page) || (step+5 > page) ? step+6 : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Finish</div>
                      <div className="caption">Order Summary</div>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="mbt__container__right">
                {/* Progress bar */}
                {/* <div className="progress__bar">
                </div> */}

                {/* Multi form */}
                <div className="form___container">
                  <div className="header">
                    <h2>{FormTitles[page]}</h2>
                  </div>
                  <div className="body">
                    {BodyContent[page]}
                  </div>
                  <div className="form__footer">
                    <button className={page === 0 ? 'btn hidden' : 'btn backward'}
                      disabled={page === 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}>
                      Back
                    </button>
                    <button className={(page === 0) || page === 2 ? 'btn hidden' : 'btn forward'}
                      disabled={(page === 0) || ((page === 5) && (checkAgreement === false))}
                      onClick={() => {
                        if (page === FormTitles.length - 1) {
                          alert("Make Payment");

                          console.log("Data here");
                        } else {
                          setPage((currPage) => currPage + 1);
                        }

                      }}
                    >
                      {page === FormTitles.length - 1 ? "Make Payment" : "Next"}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>
      <Footer />

    </div>
  )
}

export default Form