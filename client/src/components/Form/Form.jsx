import React from 'react';
import { useState, useRef, useEffect } from 'react';

import './Form.css';
import './Steps.css';

/* import Header from '../Header/Header';
 import Footer from '../Footer/Footer';*/
import Jurisdiction from '../Jurisdiction/Jurisdiction';
import NameType from '../NameType/NameType';
import SkwerPackages from '../SkwerPackages/SkwerPackages';
import OtherServices from '../OtherServices/OtherServices';
import ClientDetails from '../ClientDetails/ClientDetails';
import Order from '../Order/Order';

import SkwerLogo from '../../assets/images/skwer_b.png';
import { servData } from '../Order/AddServ'; 
import { bankData } from '../OtherServices/BankServ'; 
import Icon_pin from '../../assets/images/icons/cart.png';

function Form({formData, setFormData, fields}) {
  /* VARIABLES DECLARATION */
  const FormTitles = ["Select Country", "Propose Company Name and Company Type", "Select a Package", "Add Additional Services", "Input Your Basic Details", "Your Order Summary", "Thank you!"]
 
  /*const fields = {
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

  const [formData, setFormData] = useState(fields);*/

  const [page, setPage] = useState(0);

  const [checkAgreement, setCheckAgreement] = useState(false);

  const ref = useRef(null);

  function removeSpace(titleTxt) {
    var myStr = titleTxt;
    var newStr = myStr.replace(/\s/g, "");

    return newStr;
}



  useEffect(() => {
    /*console.log('className 👉️', ref.current.className);*/
    const className = {class: removeSpace(FormTitles[page]), id: 'ID'+removeSpace(FormTitles[page])};
    console.log(className);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getClassname() {
    const className = {class: removeSpace(FormTitles[page+1]), id: 'ID'+removeSpace(FormTitles[page+1])};
    console.log(className);
  };
  function getClassnameBack() {
    const className = {class: removeSpace(FormTitles[page-1]), id: 'ID'+removeSpace(FormTitles[page-1])};
    console.log(className);
  };

  const BodyContent = [<Jurisdiction page = {page} setPage={setPage} formData = {formData} setFormData = {setFormData} getClassname = {getClassname} />, 
    <NameType formData = {formData} setFormData = {setFormData} />, 
    <SkwerPackages page = {page} setPage={setPage} formData = {formData} setFormData = {setFormData}  getClassname = {getClassname} />, 
    <OtherServices formData = {formData} setFormData = {setFormData}  />, 
    <ClientDetails formData = {formData} setFormData = {setFormData}  />,
    <Order fields = {fields} page = {page} setPage = {setPage} checkAgreement = {checkAgreement} setCheckAgreement = {setCheckAgreement} formData = {formData} setFormData = {setFormData} getClassname = {getClassname}/>,
    
  ];

  var step = 0;

  var conv_num = formData.package_price;
  conv_num = conv_num.toLocaleString(undefined, {minimumFractionDigits:2})

  /* Validations */
  function isValidEmail(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(email);
  }

  var inclusion = (formData.package) === "plus" ? ["Setup fee", "Company Rubber Stamp", "Company Seal", "Notarisation and Apostille on Documents"] : (formData.package) === "premium" ? ["Setup fee", "Company Rubber Stamp", "Company Seal", "Notarisation and Apostille on Documents", "International Courier", "Creation of Company Logo; Business Card; and Letter Head"] : ["Setup fee"];

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };


  return (
    <div>
      <main>
        <section className='mbt section__bg css__new'>
          <div className='mbt__bottom__shape'>
            <div className="container mbt__container flex">
              {/* LEFT */}
              <div className="mbt__container__left">
                
                <div className='logo grid grid__2 header_desk'>
                  <a className="logo-default dtr-scroll-link" href="http://skwergroup.com/"><img src={SkwerLogo} alt="skwer__logo" className="skwer__logo" />
                  <h1>Ask!</h1></a>
                </div>

                {/* Left Steps */}
                <div className='left__steps__box'>
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
                </div>
              </div>
              
              {/* CENTER */}
              <div className={isActive ? 'mbt__container__right closeBar' : 'mbt__container__right'}>
                {/* Multi form */}
                <div className='logo grid grid__2 header_mobile'>
                  <a className="logo-default dtr-scroll-link" href="#home"><img src={SkwerLogo} alt="skwer__logo" className="skwer__logo" />
                  </a><h2>SKWER GROUP</h2>
                  {/* Mobile menu */}
                </div>
                <div className="form___container">
                  <div className="header">
                    <h2 ref={ref} className={removeSpace(FormTitles[page])} id={removeSpace(FormTitles[page])}>{FormTitles[page]}</h2>
                  </div>
                  <div className="body">
                    {BodyContent[page]}
                  </div>
                  <div className="form__footer bottom_btn">
                    <button className={page === 0 ? 'none' : 'btn backward'}
                      disabled={page === 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                        getClassnameBack();
                      }}>
                      BACK
                    </button>
                    <button className={(page === 0) || page === 2 || page === 5 ? 'btn none' : 'btn forward'}
                      disabled={(page === 0) || 
                        ((page === 1) & ((formData.c_name1==="") || (formData.c_name2==="") || (formData.c_name3==="")) || 
                        ((page === 4) & ((formData.f_name === "") || (formData.l_name === "") || (formData.email === "") || 
                          (formData.p_street === "") || (formData.p_city === "") || (formData.p_country === "") || (formData.p_zip === "") || (formData.p_state === "") || (formData.contact_no === ""))))}
                      onClick={() => {
                        if (page === FormTitles.length - 1) {
                          /* LAST PAGE */
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                         getClassname();
                      }}
                    >
                      {page === FormTitles.length - 1 ? "Make Payment" : "NEXT"}
                    </button>
                  </div>
                </div>
              </div>

               {/* RIGHT */}
               <div className={isActive ? 'order_summary closeBar' : 'order_summary'}>
                <span className={isActive ? 'toggleDiv closeBar' : 'toggleDiv'} onClick={handleClick}></span>
                <span className="skwer__label">
                  <img src={Icon_pin} alt="skwer_pin" />
                  <h3 className=''>Input Summary</h3>  
                </span>
                <table>
                  <tbody>
                    <tr>{/* Jurisdiction */}
                      <td>Jurisdiction: </td><td>{formData.jurisdiction === "" ? <span className='error'>* Required field</span> : formData.jurisdiction}</td>
                    </tr>
                    <tr>{/* Company name and type */}
                      <td>Company Name & Type: </td>
                      <td>
                        <ul>
                        <li>{formData.c_name1} 
                          {formData.c_name1 === "" ? <span className='error'>* Required field</span> : " (" + formData.type_1 +")" }
                        </li>
                        <li>{formData.c_name2}
                          {formData.c_name2 === "" ? <span className='error'>* Required field</span> : " (" + formData.type_2 +")" }
                        </li>
                        <li>{formData.c_name3}
                          {formData.c_name3 === "" ? <span className='error'>* Required field</span> : " (" + formData.type_3 +")" }
                        </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>{/* Package */}
                      <td>Selected Package: </td>
                      <td className='uppercase'>
                        {formData.package === "" ? <span className='error'>* Required field</span> : formData.package}
                        {
                          conv_num === "0.00" ? "" : " ($" + conv_num +")"
                        }
                        <ul className='data__inclusion'>
                        {formData.package === "" ? "" : inclusion.map((data) => {
                            return <li>{data}</li>
                        })}
                        </ul>  
                      </td>
                    </tr>
                    <tr>{/* Additional Services */}
                      <td>Availed Additional Services: </td>
                      <td>
                        <ol>
                            {
                              formData.add_serv === "" ? "wala" : 
                            servData.map((data, index) => {
                                return <span key={index}>
                                  {formData.add_serv.map((item, index) => {
                                      if(item===data.service) {
                                        return <li key={index}>{data.service} (${data.price})</li>;
                                      }
                                      return "";
                                  })}
                                </span>;
                            })
                            }
                        </ol>
                      </td>
                    </tr>
                    <tr>{/* Bank Services */}
                      <td>Availed Bank Services: </td>
                      <td>
                        <ol>
                            {
                              formData.bank === "" ? "wala" : 
                              bankData.map((data, index) => {
                                return <span key={index}>
                                  {formData.bank.map((item, index) => {
                                      if(item===data.bank) {
                                        return <li key={index}>{data.bank} (${data.price.toLocaleString(undefined, {minimumFractionDigits:2})})</li>;
                                      }
                                      return "";
                                  })}
                                </span>;
                            })
                            }
                        </ol>
                      </td>
                    </tr>
                    <tr>{/* Basic Details */}
                      <td>Basic Details: </td>
                      <td>
                            <ul>
                              <li><span className='color__black'>Name: </span> 
                                {formData.f_name === "" ? <span className='error'>* Required field</span>  : ' ' + formData.salutation + ' ' + formData.f_name + ' ' + formData.l_name}
                              </li>
                              <li><span className='color__black'>E-mail: </span>
                                {formData.email === "" ? <span className='error'>* Required field</span>  : !isValidEmail(formData.email) ? <span>* Invalid Email</span> : ' ' + formData.email}
                              </li>
                              <li><span className='color__black'>Contact Number: </span>
                                {formData.contact_no === "" ? <span className='error'>* Required field</span> : ' ' + formData.contact_no}
                              </li>
                              <li><span className='color__black'>Nationality: </span>
                                {formData.nationality === "" ? <span className='error'>* Required field</span> : ' ' + formData.nationality}
                              </li>
                              <li><span className='color__black'>Personal Address: </span>
                                {formData.p_city === "" ? <span className='error'>* Required field</span> : ' ' + formData.p_street + ' ' + formData.p_city + ' ' + formData.p_state + ' (' + formData.p_zip + '), ' + formData.p_country}
                              </li>
                            </ul>
                      </td>
                    </tr>
                  </tbody>
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