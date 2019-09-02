import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../logo.png'

function Header() {
    return (
        <div className='head'>
            <div className='logo'>
                <NavLink to='/'><img src={logo} alt='logo'/></NavLink>
            </div>
            <div className='head-info'>
                <div className='tell'>
                    <a href='tel:+3800661272960'>
                        +380(066)127-29-60
                    </a>
                </div>
                <div className='email'>
                    <a href='mailto:satyrvadim4@gmail.com'>
                        satyrvadim4@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;