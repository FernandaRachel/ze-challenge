import React from 'react'
import './header.scss';
import logo from './../../assets/images/ze-logo.png';

const Header = props => {

    const getAddress = () => {
        const address = sessionStorage.getItem('address');
        console.log('get', address)
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