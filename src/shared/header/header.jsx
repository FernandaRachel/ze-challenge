import React from 'react';
import logo from './../../assets/images/ze-logo.png';
import './header.scss';

const Header = props => {

    const getAddress = () => {
        const address = sessionStorage.getItem('address');
        return address ? address.replace("",'') : '';
    }
    return (
        <div className="header">
            <img className="logo" src={logo}></img>
            <span>{getAddress()}</span>
        </div>
    )
}

export default Header;