import React from 'react';
import { Link } from 'react-router-dom';

import './Style/Nav.css';

function Nav() {
    return (
        <div className='nav_Container'>
            <nav className="home_nav">
                <span className='logo'>MyCart</span>

                <Link to={'/login'} className='login_lnk'> LOGIN </Link>
                <Link to={'/signup'} className='signup_link'>SIGNUP </Link>

            </nav>
        </div>
    )
}

export default Nav