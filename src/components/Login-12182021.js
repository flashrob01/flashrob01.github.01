import React, {useState, useEffect, Component} from 'react';

import DOMPurify from'dompurify';

import {Link} from 'react-router-dom'

////import './../styles/login.css';

//import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

require('dotenv').config();
const axios = require("axios");


const Login = () => {
  
       /*  useEffect(() => {
           const script = document.createElement('script');

           script.src = "https://apis.google.com/js/platform.js";

            script.async = true;
          
       }, [])    ; 
       
       useEffect(); */

         /* useEffect(() => {
           const script = document.createElement('script');

           script.src = "src/purify.js";
           script.async = true;

           document.body.appendChild(script);

           return () => {
             document.body.removeChild(script);
           }
                     
       }, [])    ;  */
       
   

       //let clean = DOMPurify.sanitize( dirty );
            
       const onClick1 = () => {
         window.location.href= 'http://localhost:4000/auth/google';
       }
       


    return (
        <div className="App">
        <header className="App-header">
       <Link to={'/auth/logout'} > <button> Logout </button></Link>
           
       <button onClick={onClick1}>Google Login</button>

       <script src="https://apis.google.com/js/platform.js" async defer></script>

       <script type="text/javascript" src="src/purify.js"></script>

          <h1 className="App-title">Login using...</h1>
          <p className="App-intro"></p>
          <a class="google-btn" href="/google">Google+</a>
         
        </header>
        <div className="App-body">
          
          
        
          
            )
        </div>
      </div>
    )
};

export default Login;



