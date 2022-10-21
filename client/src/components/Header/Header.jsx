import React from 'react';
import './Header.css';
import SkwerLogo from '../../assets/images/skwerlogo.png';

function Header() {
  return (
    <header>
        <div className='header'>
            <div className='logo'>
                <img src={SkwerLogo} alt="" className="skwer__logo" />
            </div>
            <div className=''>menu</div>
        </div>
        
    </header>
  )
}

export default Header