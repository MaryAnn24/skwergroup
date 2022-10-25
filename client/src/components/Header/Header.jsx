import React from 'react';
import './Header.css';
import SkwerLogo from '../../assets/images/skwerlogo.png';

const Header = () => {
  /*=============== Change Background header ===============*/
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".fixed-top");
    const menu = this.document.querySelector(".nav__bar");
    /* scroll is higher than 560 viewport height */
    if(this.scrollY >= 20) {
      header.classList.add("scroll-header");
      menu.classList.add("menu-black");
    }
    else {
      header.classList.remove("scroll-header");
      menu.classList.remove("menu-black");
    }
  });

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