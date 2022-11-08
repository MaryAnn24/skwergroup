import React from 'react';
import { useState } from 'react';

import './Form.css';
import './Steps.css';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Jurisdiction from '../Jurisdiction/Jurisdiction';
import NameType from '../NameType/NameType';
import SkwerPackages from '../SkwerPackages/SkwerPackages';
import OtherServices from '../OtherServices/OtherServices';
import ClientDetails from '../ClientDetails/ClientDetails';
import Order from '../Order/Order';

import SkwerLogo from '../../assets/images/skwer_logo.svg';
import Bldg from '../../assets/images/onboarding-incorp.png';

import { servData } from '../Order/AddServ'; 
import Icon_pin from '../../assets/images/icons/paper-pin.png';

function Form() {
  /* VARIABLES DECLARATION */
  const FormTitles = ["Select Country", "Propose Company Name and Company Type", "Select a Package", "Add Additional Services", "Input Your Basic Details", "Your Order Summary"]
 
  const fields = {
    jurisdiction: "",
    c_name1: "",
    type_1: "Limited",
    c_name2: "",
    type_2: "Limited",
    c_name3: "",
    type_3: "Limited",
    package: "",
    add_serv: [],
    salutation: "Ms.",
    f_name: "",
    l_name: "",
    email: "",
    address: "",
    contact_no: "",
    package_price: 0,
    add_serv_price: 0
  };

  const [formData, setFormData] = useState(fields);

  const [page, setPage] = useState(0);

  const [checkAgreement, setCheckAgreement] = useState(false);

  const BodyContent = [<Jurisdiction page = {page} setPage={setPage} formData = {formData} setFormData = {setFormData} />, 
    <NameType formData = {formData} setFormData = {setFormData} />, 
    <SkwerPackages page = {page} setPage={setPage} formData = {formData} setFormData = {setFormData}  />, 
    <OtherServices formData = {formData} setFormData = {setFormData}  />, 
    <ClientDetails formData = {formData} setFormData = {setFormData}  />,
    <Order fields = {fields} page = {page} setPage = {setPage} checkAgreement = {checkAgreement} setCheckAgreement = {setCheckAgreement} formData = {formData} setFormData = {setFormData} />];

  var step = 0;

  var conv_num = formData.package_price;
  conv_num = conv_num.toLocaleString(undefined, {minimumFractionDigits:2})

  /* Validations */
  function isValidEmail(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(email);
  }

  return (
    <div>
      <main>
        <section className='mbt section__bg css__new'>
          <div className='mbt__bottom__shape'>
            <div className="container mbt__container flex">
              {/* LEFT */}
              <div className="mbt__container__left">
                
                <div className='logo grid grid__2'>
                  <a class="logo-default dtr-scroll-link" href="#home"><img src={SkwerLogo} alt="skwer__logo" className="skwer__logo" />
                  
                  </a><h2>SKWER GROUP</h2>
                  {/* Mobile menu */}
                </div>
                <p className="lead"></p>
                {/* Left Steps */}
                <div className= {`step ${step === page ? "step-active " : null} ${step < page ? "step-done " : ""}` + step} >
                  <div>
                    <div className="circle">
                      {step+1 > page ? "" : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Select Jurisdiction</div>
                    {/* <div className="caption">Add inst. here</div> */}
                  </div>
                </div>
                <div className={`step ${step+1 === page ? "step-active " : null} ${step+1 < page ? "step-done " : ""}`}
                >
                  <div>
                    <div className="circle" >
                      {(step+1 === page) || (step+1 > page) ? "" : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Propose Company Name & Type</div>
                  </div>
                </div>
                <div className={`step ${step+2 === page ? "step-active " : null} ${step+2 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+2 === page) || (step+2 > page) ? "" : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Select a Package</div>
                  </div>
                </div>    
                <div className={`step ${step+3 === page ? "step-active " : null} ${step+3 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+3 === page) || (step+3 > page) ? "": <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Add additional services</div>
                  </div>
                </div>
                <div className={`step ${step+4 === page ? "step-active " : null} ${step+4 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+4 === page) || (step+4 > page) ? "" : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Input Your Basic Details</div>
                  </div>
                </div>
                     
                <div className={`step ${step+5 === page ? "step-active " : null} ${step+5 < page ? "step-done " : ""}`}>
                  <div>
                    <div className="circle">
                      {(step+5 === page) || (step+5 > page) ? "" : <i className='fa fa-check'></i>}
                    </div>
                  </div>
                  <div>
                    <div className="title">Confirm & pay</div>
                  </div>
                </div>
                <div className='bg__bldg'>
                  <img src={Bldg} alt="" />
                </div>
              </div>
              
              {/* CENTER */}
              <div className="mbt__container__right">
                {/* Multi form */}
                <div className="form___container">
                  <div className="form__footer">
                    <button className={page === 0 ? 'hidden' : ' backward'}
                      disabled={page === 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}>
                      Back
                    </button>
                    
                  </div>
                  <div className="header">
                    <h2>{FormTitles[page]}</h2>
                  </div>
                  <div className="body">
                    {BodyContent[page]}
                  </div>
                  <div className="form__footer bottom_btn">
                    <button className={(page === 0) || page === 2 || page === 5 ? 'btn hidden' : 'btn forward'}
                      disabled={(page === 0) /*|| ((page === 5) && (checkAgreement === false))*/}
                      onClick={() => {
                        if (page === FormTitles.length - 1) {
                          /* LAST PAGE */
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
               {/* RIGHT */}
               <div className="mbt__container__left order_summary ">
                <span className='pin'>
                  <img src={Icon_pin} alt="" />
                </span>
                <h3 className=''>Input Summary:</h3>
                <table>
                 
                  {/* {table_fields.map((t_item) => {
                    return <tr>
                      <td>{t_item}</td>
                    </tr>
                  })} */}
                  <tr>
                    <td>Jurisdiction: </td><td>{formData.jurisdiction}</td>
                  </tr>
                  <tr>
                    <td>Company Name & Type: </td>
                    <td>
                      <ul>
                      <li>{formData.c_name1} 
                        {formData.c_name1 === "" ? <error>* Required field</error> : " (" + formData.type_1 +")" }
                      </li>
                      <li>{formData.c_name2}
                        {formData.c_name2 === "" ? <error>* Required field</error> : " (" + formData.type_2 +")" }
                      </li>
                      <li>{formData.c_name3}
                        {formData.c_name3 === "" ? <error>* Required field</error> : " (" + formData.type_3 +")" }
                      </li>
                      </ul>
                    </td>

                  </tr>
                  <tr>
                    <td>Selected Package: </td>
                    <td className='uppercase'>
                      {formData.package} 
                      {
                        conv_num === "0.00" ? "" : " ($" + conv_num +")"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Availed Additional Services: </td>
                    <td>
                      <ul>
                          {
                            formData.add_serv === "" ? "wala" : 
                          servData.map((data) => {
                              return <span>
                                {formData.add_serv.map((item) => {
                                    if(item===data.id) {
                                      return <li>{data.service} ${data.price}</li>;
                                    }
                                    return "";
                                })}
                              </span>;
                          })
                          }
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Basic Details: </td>
                    <td>
                          <ul>
                            <li>Name: 
                              {formData.f_name === "" ? <error>* Required field</error>  : ' ' + formData.salutation + ' ' + formData.f_name + ' ' + formData.l_name}
                            </li>
                            <li>E-mail: 
                              {formData.email === "" ? <error>* Required field</error>  : !isValidEmail(formData.email) ? <error>* Invalid Email</error> : ' ' + formData.email}
                            </li>
                            <li>Company Address: 
                              {formData.address === "" ? <error>* Required field</error> : ' ' + formData.address}
                            </li>
                            <li>Contact Number: 
                              {formData.contact_no === "" ? <error>* Required field</error> : ' ' + formData.contact_no}
                            </li>
                          </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Form;