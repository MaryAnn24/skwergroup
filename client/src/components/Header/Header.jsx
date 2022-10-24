import React from 'react';
import './Header.css';
import SkwerLogo from '../../assets/images/skwerlogo.png';

function Header() {
  return (
    <header className='fixed-top'>
        <div className='container'>
          <div className="flex header__container">
             <div className='header-left logo'>
                <a class="logo-default dtr-scroll-link" href="#home"><img src={SkwerLogo} alt="skwer__logo" className="skwer__logo" /></a>
                {/* Mobile menu */}
            </div>
            <div className='header-right'>
                <div className="nav__bar">
                  <ul>
                    <li>
                      <a href="#home" className='active'>Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
           
        </div>
        
    </header>
  )
}

export default Header