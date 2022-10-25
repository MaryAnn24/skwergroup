import React from 'react';
import './SkwerPackages.css';

function SkwerPackages({formData, setFormData}) {
  return (
    <div>
        <div class="flex package__container">     
            <section className='package__section'
              onClick={() => setFormData({
                ...formData, package: 'Basic'
              })}
            > 
                <div class="dtr-pricing bg__dark color__white">
                    <h3 class="dtr-pricing-heading border-white-muted">Basic</h3>
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
              onClick={() => setFormData({
                ...formData, package: 'Plus'
              })}
            > 
                <div class="dtr-pricing bg__light color__white">
                    <h3 class="dtr-pricing-heading border-white-muted">Plus</h3>
                    <p class="dtr-price-subtext color-white-muted">from</p>
                    <p class="dtr-price">$29.99</p>
                    <p class="dtr-price-subtext color-white-muted">per month</p>
                    
                    <div class="dtr-pricing-details">
                        <p> <a class="dtr-pricing-details-title color__white" data-toggle="collapse" href="#pricing1" role="button" aria-expanded="false" aria-controls="pricing1"> See full details </a> </p>
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
              onClick={() => setFormData({
                ...formData, package: 'Premium'
              })}
            > 
                <div class="dtr-pricing bg__dark color__white">
                    <h3 class="dtr-pricing-heading border-white-muted">Premium</h3>
                    <p class="dtr-price-subtext color-white-muted">from</p>
                    <p class="dtr-price">$29.99</p>
                    <p class="dtr-price-subtext color-white-muted">per month</p>
                    
                    <div class="dtr-pricing-details">
                        <p> <a class="dtr-pricing-details-title color__white" data-toggle="collapse" href="#pricing1" role="button" aria-expanded="false" aria-controls="pricing1"> See full details </a> </p>
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