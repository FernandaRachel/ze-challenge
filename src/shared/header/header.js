import React from 'react'
import './header.css';

const Header = props => {
  
    return (
        <div className="header">
            <img src={require('./../../assets/images/ze-logo.png')}></img>
        </div>
    )
}

export default Header;