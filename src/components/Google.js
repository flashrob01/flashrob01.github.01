import React, {useState, useEffect, Component} from 'react';

//import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

require('dotenv').config();
const axios = require("axios");


const Google = () => {


/*   useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://apis.google.com/js/platform.js";

     script.async = true;
   
}, [])    ;

useEffect(); */
  return (
      <div className= "pageContainer">
             <div id="banner">
      <h1>
          Google Login page
      </h1>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
  </div>
      
  

 
  <div id="secured" />
  <p> Secured by escrow </p>
  </div>

       
          
  )
}

export default Google



