import React from 'react';
import './../styles/header.css';

const Header = () => {
    
    return (
        <header>
        <div className="columnFlex">
        <h1>DDRC</h1>
        <h2>Distributed Data, Research, and Consulting</h2>
        </div>
            <img src="images/DDRLogo2.png" className='App-logo' alt="Rotating DDR Logo"/>
          </header>
    )
};

export default Header
