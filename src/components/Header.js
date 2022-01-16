import React from 'react';
import './../styles/header.css';

const Header = () => {
    
    return (
        <header>
        <div className="columnFlex">
        <h1>DDRC</h1>
        <h2>Distributed Data, Research, and Consulting</h2>
        </div>
        <div id = "DDRlogo">
    
    <img src={require("../images/DDRLogo2.png").default} className="DDR_Logo"/>
    </div>
          </header>
    )
};

export default Header
