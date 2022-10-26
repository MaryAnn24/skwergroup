import React from 'react';
import './SkwerPackages.css';

function SkwerPackages({formData, setFormData, page, setPage}) {
    
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
                        ...formData, package_price: 100
                    });
                    }

                    
                }
            > 
                <div class="dtr-pricing bg__dark color__white">
                    <h3 class="dtr-pricing-heading border-white-muted color__white">Basic</h3>
                    <p class="dtr-price-subtext color-white-muted">from</p>
                    <p class="dtr-price">$29.99</p>
                    <p class="dtr-price-subtext color-white-muted">per month</p>
                    
                    <div class="dtr-pricing-details">
                        <p> <span class="dtr-pricing-details-title color__white" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> See full details </span> </p>
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
            </section>

            <section className='package__section '
              onClick={() => {
                setFormData({
                ...formData, package: 'Plus'
                });
                setPage((page) => page + 1);
                }
            }
            > 
                <div class="dtr-pricing bg__light color__white">
                    <h3 class="dtr-pricing-heading border-white-muted color__white">Plus</h3>
                    <p class="dtr-price-subtext color-white-muted">from</p>
                    <p class="dtr-price">$29.99</p>
                    <p class="dtr-price-subtext color-white-muted">per month</p>
                    
                    <div class="dtr-pricing-details">
                        <p> <span class="dtr-pricing-details-title color__white" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> See full details </span> </p>
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
            </section>

            <section className='package__section'
              onClick={() => {
                setFormData({
                ...formData, package: 'Premium'
                });
                setPage((page) => page + 1);
                }
            }
            > 
                <div class="dtr-pricing bg__dark color__white">
                    <h3 class="dtr-pricing-heading border-white-muted color__white">Premium</h3>
                    <p class="dtr-price-subtext color-white-muted">from</p>
                    <p class="dtr-price">$29.99</p>
                    <p class="dtr-price-subtext color-white-muted">per month</p>
                    
                    <div class="dtr-pricing-details">
                        <p> <span class="dtr-pricing-details-title color__white" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="pricing1"> See full details </span> </p>
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
            </section>
        </div>
    </div>

  )
}

export default SkwerPackages