import React, {useState, useEffect, Component} from 'react';
////import './../styles/login.css';
import {useDispatch, useSelector} from 'react-redux';
import {talkingToCustomerDb, talkedToCustomerDb, talkingToCustomerDbFailed, selectCustomer} from '../slice_reducers/customerSlice';
import Products from '../components/Products';
import UseForm from './UseForm';
//import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


import API from './API';
import {Link, useLocation} from 'react-router-dom';
import Checkout from '../components/Checkout';

import Logo from './../linkedin.png';

import ProfileCard from "./ProfileCard";
import _ from 'lodash';

import { useLinkedIn } from 'react-linkedin-login-oauth2';
//import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

//4 below copied from callback.js temporarily
/* var express = require('express');
var callbackRouter = express.Router();
const request = require('superagent');
require('dotenv').config() */
//4 above copied from callback.js temporarily

require('dotenv').config();
const axios = require("axios");
const request = require('superagent');



const Login = () => {

  const[authenticate,setAuthenticate] = useState({
    isAuthorized: false,
   firstName: null,
   lastName: null,
   profileURL: null,
   pictureURL: null,
  });
 

 


function getAccessToken(code, state){
  setAuthenticate({
    isAuthorized: true,
    firstName: _.get('localizedFirstName',''),
    lastName: _.get('localizedLastName',''),
    profileURL: `https://www.linkedin.com/in/${_.get('vanityName','')}`,
    pictureURL: _.get(_.last(_.get('profilePicture.displayImage~.elements','')),'identifiers[0].identifier','')
  })
  }




function updateProfile (profile) {
  console.log(profile)
    setAuthenticate({
      isAuthorized: true,
      firstName: _.get(profile,'localizedFirstName',''),
      lastName: _.get(profile,'localizedLastName',''),
      profileURL: `https://www.linkedin.com/in/${_.get(profile,'vanityName','')}`,
      pictureURL: _.get(_.last(_.get(profile,'profilePicture.displayImage~.elements','')),'identifiers[0].identifier','')
    })
}



const {linkedInLogin} = useLinkedIn({
  clientId:'86vhj2q7ukf83q',
  redirectUri: `${window.location.origin}/linkedin`,

  onSuccess: (code, state) => {
        console.log('code is', code);
        console.log('state is', state);

        getAccessToken(code, state);
      
  }, 

  onError: (error) => {
    console.log(error);
},


});

const requestProfile = () => {
  
 

  var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=r_liteprofile&state=123456&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
  var width = 450,
    height = 730,
    left = window.screen.width / 2 - width / 2,
    top = window.screen.height / 2 - height / 2;
 

   
   

  window.open(
    oauthUrl,
    "Linkedin",
    "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
      width +
      ", height=" +
      height +
      ", top=" +
      top +
      ", left=" +
      left
  );

  
};

   
/* const {linkedInLogin} = useLinkedIn({
    clientId:'86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`,

    onSuccess: (code) => {
          console.log(code);
       //   getAccessCode(code);
       handleSuccess(code);
    }, */
       
      //    alert('Login via LinkedIn to DDRC successful',{position:'top'});

    

       /*     const userData = axios.get("https://attach-cors.herokuapp.com/https://api.linkedin.com/v2/me", configA);
          const name =
            userData.data.localizedFirstName + userData.data.localizedLastName
              ? userData.data.localizedFirstName +
                " " +
                userData.data.localizedLastName
              : "";
 
              const profilePicture = axios.get(
                "https://attach-cors.herokuapp.com/https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
                configA
              );
          
              const elements =
                profilePicture.data.profilePicture["displayImage~"].elements;
              const identifier =
                elements && elements.length > 0
                  ? elements[elements.length - 1].identifiers
                  : {};
              const profilePic = identifier && identifier[0] && identifier[0].identifier;
          
              const emailData = axios.get(
                "https://attach-cors.herokuapp.com/https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(name,primary,type,handle~))",
                configA
              );
          
              const emailUser =
                emailData.data && emailData.data.elements && emailData.data.elements[0]
                  ? emailData.data.elements[0]["handle~"].emailAddress
                  : ""; */
          
 
              
//priority #1 get this function above to run
// if cannot achieve prioity #2, then try and get callback function to run

   //lodash('_').get is used to get the value at the path of an object
 
     return (
       <div className="App">
         <header className="App-header">
             
             <button  onClick={linkedInLogin}> Linkedin Login#1 </button>

           <h1 className="App-title">DDRC- React Linkedin Login</h1>
           <p className="App-intro">A demo page for Linkedin login</p>
          
           React-Linkedin-Login for DDRC App
         </header>
         <div className="App-body">
           
           
         
           {authenticate.isAuthorized &&
             (
               <ProfileCard
                 firstName={authenticate.firstName}
                 lastName={authenticate.lastName}
                 profileURL={authenticate.profileURL}
                 pictureURL={authenticate.pictureURL}
               />
             )}
         </div>
       </div>
     );
   
  }
  
export default Login;
/* 
  <button  onClick={requestAccessToken}> requestAccessToken </button>   
             <button  onClick={requestProfile}> requestProfile </button>  

             <button onClick={requestProfile}>Linkedin Login</button> */