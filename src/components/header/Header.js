import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => {
    const openGithub = () => {
        window.open('https://github.com/kakaoProFit', '_blank');
    };
    const openNaver = () => {
        window.open('https://www.naver.com', '_blank');
    };

    return(
        <div className='headerContainer'>
            <div>
                <Link to="/" className='headerLogoLink'>
                    <img className='headerLogo' alt='profit_logo' src="/image/profit_logo.png" />
                </Link>
            </div>
            <div className='headerbar'>
                <button className="headerMenu" onClick={openGithub}>github</button>
                <button className="headerMenu" onClick={openNaver}>Naver</button>
            </div>
        </div>
    )
}

export default Header;