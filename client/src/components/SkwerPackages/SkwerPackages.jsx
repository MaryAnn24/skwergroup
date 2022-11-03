import React from 'react';
import './SkwerPackages.css';
import { countryData } from '../Jurisdiction/Country_data';
import BasicPic from '../../assets/images/packages/pac-basic.png';
import PlusPic from '../../assets/images/packages/pac-plus.png';
import PremiumPic from '../../assets/images/packages/pac-premium.png';

function SkwerPackages({formData, setFormData, page, setPage}) {
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
    
  return (
    <div>
        <div class="flex package__container">     
            <section className='package__section' 
                onClick={() => {
                    setFormData({
                    ...formData, package: 'Basic'
                    });
                    setPage((page) => page + 1);

                    setFormData({
                        ...formData, package: "basic", package_price: basicPrice
                    });
                    }   
                }
            > 
                <div class="dtr-pricing bg__white basic__pac">
                    <div className='grid p__pic '>
                        <img src={BasicPic} alt="basic-pac" />
                        <h3 class="dtr-pricing-heading border-white-muted color__black">Basic</h3>
                    </div>
                    <div className='p__data'>
                        <p class="dtr-price-subtext color-white-muted">from</p>
                        <p class="dtr-price">${basicPrice}</p>
                        <p class="dtr-price-subtext color-white-muted">per month</p>

                        <div class="dtr-pricing-details color__black">
                        <p> <span class="dtr-pricing-details-title " data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> Full Details </span> </p>
                        <div class="collapse" id="pricing1">
                            <ul class="dtr-list-pricing">
                                <li>Daily Feedback</li>
                                <li>Marketing Support</li>
                                <li>Dedicated Staff Member</li>
                                <li>Cost Efficient</li>
                                <li>Timely Service</li>
                            </ul>
                        </div>
                        </div>
                    </div>    
                </div>
            </section>

            <section className='package__section '
              onClick={() => {
                setFormData({
                ...formData, package: "plus", package_price: plusPrice
                });
                setPage((page) => page + 1);
                }
            }
            > 
                <div class="dtr-pricing bg__white plus__pac">
                    <div className='grid p__pic'>
                        <img src={PlusPic} alt="basic-pac" />
                        <h3 class="dtr-pricing-heading border-white-muted color__black">Plus</h3>
                    </div>
                    <div className='p__data'>
                        <p class="dtr-price-subtext color-white-muted">from</p>
                        <p class="dtr-price">${plusPrice}</p>
                        <p class="dtr-price-subtext color-white-muted">per month</p>

                        <div class="dtr-pricing-details color__black">
                        <p> <span class="dtr-pricing-details-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> Full Details </span> </p>
                        <div class="collapse" id="pricing1">
                            <ul class="dtr-list-pricing">
                                <li>Daily Feedback</li>
                                <li>Marketing Support</li>
                                <li>Dedicated Staff Member</li>
                                <li>Cost Efficient</li>
                                <li>Timely Service</li>
                            </ul>
                        </div>
                        </div>
                    </div>    
                </div>
            </section>

            <section className='package__section'
              onClick={() => {
                setFormData({
                ...formData, package: "premium", package_price: premiumPrice
                });
                setPage((page) => page + 1);
                }
            }
            > 
                <div class="dtr-pricing bg__white premium__pac">
                    <div className='grid p__pic'>
                        <img src={PremiumPic} alt="basic-pac" />
                        <h3 class="dtr-pricing-heading border-white-muted">Premium</h3>
                    </div>
                    <div className='p__data'>
                        <p class="dtr-price-subtext color-white-muted">from</p>
                        <p class="dtr-price">${premiumPrice}</p>
                        <p class="dtr-price-subtext color-white-muted">per month</p>

                        <div class="dtr-pricing-details color__black">
                        <p> <span class="dtr-pricing-details-title" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> Full Details </span> </p>
                        <div class="collapse" id="pricing1">
                            <ul class="dtr-list-pricing">
                                <li>Daily Feedback</li>
                                <li>Marketing Support</li>
                                <li>Dedicated Staff Member</li>
                                <li>Cost Efficient</li>
                                <li>Timely Service</li>
                            </ul>
                        </div>
                        </div>
                    </div>    
                </div>
            </section>
        </div>
    </div>

  )
}

export default SkwerPackages;