import React from 'react'
import {Link} from 'react-redux'
import './../styles/About.css'
import {DynamicTable} from "./DynamicTable"

const Home = () => {

    return (
        <div className= "pageContainer">
               <div id="banner">
        <h1>
            Welcome to Decentralized Data, Research,  <br />
            and Consulting Store
        </h1>
    </div>
        
    <figure id = "DDRlogo">
    </figure>
    <img src="./images/DDRLogo2.png" />
    <img id = "consult4" src="./images/Consulting1.jpg" />

   


   
    <div id="secured" />
    <p> Secured by escrow </p>
    </div>

         
            
    )
}

export default Home