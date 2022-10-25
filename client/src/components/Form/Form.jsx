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
import '../Steps/Steps.css';

function Form() {
  const FormTitles = ["Select Country", "Company name and company type", "Select Packages", "Additional Services", "Basic Details", "Order Summary"]
  const BodyContent = [<Jurisdiction />, <NameType />, <SkwerPackages />, <OtherServices />, <ClientDetails />, <Order />];

  const [page, setPage] = useState(0);

  var step = 0;

  return (
    <div>
      <Header />
      <main>
        <section className='mbt section__bg'>
          <div className='mbt__bottom__shape'>
            <div className="container mbt__container flex">
              {/* LEFT */}
              <div className="mbt__container__left">
                {/* Left Steps */}
                <div className= {`step ${step === page ? "step-active " : null} ${step < page ? "step-done " : ""}` + step} >
                  <div>
                    <div className="circle">
                      {step+1 > page ? step+1 : <i class='fa fa-check'></i>}
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
                      {(step+1 === page) || (step+1 > page) ? step+2 : <i class='fa fa-check'></i>}
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
                      {(step+2 === page) || (step+2 > page) ? step+3 : <i class='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Select Packages</div>
                      <div className="caption">Basic | Plus | Premium</div>
                  </div>
                </div>    
                <div className={`step ${step+3 === page ? "step-active " : null} ${step+3 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+3 === page) || (step+3 > page) ? step+4 : <i class='fa fa-check'></i>}
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
                      {(step+4 === page) || (step+4 > page) ? step+5 : <i class='fa fa-check'></i>}
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
                      {(step+5 === page) || (step+5 > page) ? step+6 : <i class='fa fa-check'></i>}
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
                    <h1>{FormTitles[page]}</h1>
                  </div>
                  <div className="body">
                    {BodyContent[page]}
                  </div>
                  <div className="footer">
                    <button className='btn'
                      disabled={page === 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}>
                      BACK
                    </button>
                    <button className='btn'
                      onClick={() => {
                        if (page === FormTitles.length - 1) {
                          alert("Make Payment");

                          console.log("Data here");
                        } else {
                          setPage((currPage) => currPage + 1);
                        }

                      }}
                    >
                      {page === FormTitles.length - 1 ? "MAKE PAYMENT" : "NEXT"}
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