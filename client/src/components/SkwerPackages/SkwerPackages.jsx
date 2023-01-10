import React from 'react';
import './SkwerPackages.css';
import { countryData } from '../Jurisdiction/Country_data';
import BasicPic from '../../assets/images/packages/star_3.png';
import PlusPic from '../../assets/images/packages/star_4.png';
import PremiumPic from '../../assets/images/packages/star_5.png';

function SkwerPackages({formData, setFormData, page, setPage, getClassname}) {
    
    /* VARIABLES DECLARATION */
    const filtered = countryData.filter(country => {
        return country.country === formData.jurisdiction;
      });

      var basicPrice, plusPrice, premiumPrice;
      filtered.map((item) => {
        basicPrice = item.basic;
        plusPrice = item.plus;
        premiumPrice = item.premium;
        return "";
      });
    
    const handleChange = () => {
        const cyprus_serv = ['Company Secretary', "VAT number"];
        if(formData.jurisdiction === "Cyprus") {
        setFormData({
            ...formData, add_serv: cyprus_serv
        });
        } else {
            setFormData({
                ...formData, add_serv: []
            });
        }
    }
    
  return (
    <div onLoad={handleChange}>
        <div className="flex package__container">
            {/* BASIC */}    
            <section className={`package__section ${formData.package === 'basic'? 'selected_pack' : '' }`} 
                onClick={() => {
                    setFormData({
                    ...formData, package: 'Basic'
                    });
                    setPage((page) => page + 1);

                    setFormData({
                        ...formData, package: "basic", package_price: basicPrice
                    });
                    getClassname();
                    }   
                }
            > 
                <div className="dtr-pricing bg__white basic__pac">
                    <div className='grid p__pic '>
                        <h3 className="dtr-pricing-heading border-white-muted">Basic</h3>
                        <img src={BasicPic} alt="basic-pac" />
                    </div>
                    <div className='p__data'>
                        

                        <div className="dtr-pricing-details">
                        <p> <span className="dtr-pricing-details-title " data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> Inclusion: </span> </p>
                        <div className="collapse" id="pricing1">
                            <ul className="dtr-list-pricing">
                                <li>Set-up Fee</li>
                                
                            </ul>
                        </div>
                        </div>
                        <p className="dtr-price">${basicPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</p>
                    </div> 
                    
                </div>
            </section>
            {/* PLUS */} 
            <section className={`package__section ${formData.package === 'plus'? 'selected_pack' : '' }`}
              onClick={() => {
                setFormData({
                ...formData, package: "plus", package_price: plusPrice
                });
                setPage((page) => page + 1);
                getClassname();
                }
            }
            > 
                <div className="dtr-pricing bg__white plus__pac">
                    <div className='grid p__pic'>
                        <h3 className="dtr-pricing-heading border-white-muted color__black">Plus</h3>
                        <img src={PlusPic} alt="basic-pac" />                   
                    </div>
                    <div className='p__data'>
                        
                        <div className="dtr-pricing-details">
                        <p> <span className="dtr-pricing-details-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> Inclusion: </span> </p>
                        <div className="collapse" id="pricing1">
                            <ul className="dtr-list-pricing">
                                <li>Set-up Fee</li>
                                <li>Company Rubber Stamp</li>
                                <li>Company Seal</li>
                                <li>Notarisation and Apostille on Documents</li>
                            </ul>
                        </div>
                        </div>
                        <p className="dtr-price">${plusPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</p>
                    </div>    
                </div>
            </section>
            {/* PREMIUM */} 
            <section className={`package__section ${formData.package === 'premium'? 'selected_pack' : '' }`}
              onClick={() => {
                setFormData({
                ...formData, package: "premium", package_price: premiumPrice
                });
                setPage((page) => page + 1);
                getClassname();
                }
                }
            > 
                <div className="dtr-pricing bg__white premium__pac">
                    <div className='grid p__pic'>
                        <h3 className="dtr-pricing-heading border-white-muted">Premium</h3>
                        <img src={PremiumPic} alt="basic-pac" />
                    </div>
                    <div className='p__data'>
                        <div className="dtr-pricing-details">
                        <p> <span className="dtr-pricing-details-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> Inclusion: </span> </p>
                        <div className="collapse" id="pricing1">
                            <ul className="dtr-list-pricing">
                                <li>Set-up Fee</li>
                                <li>Company Rubber Stamp</li>
                                <li>Company Seal</li>
                                <li>Notarisation and Apostille on Documents</li>
                                <li>International Courier</li>
                                <li>Creation of Company Logo; Business Card; and Letter Head</li>
                            </ul>
                        </div>
                        </div>
                        <p className="dtr-price">${premiumPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</p>
                    </div>    
                </div>
            </section>
        </div>
    </div>
  )
}

export default SkwerPackages;