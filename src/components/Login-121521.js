import React, {useState, useEffect, Component} from 'react';
////import './../styles/login.css';
import {useDispatch, useSelector} from 'react-redux';
import {talkingToCustomerDb, talkedToCustomerDb, talkingToCustomerDbFailed, selectCustomer} from '../slice_reducers/customerSlice';
import Products from './Products';
import UseForm from './UseForm';
//import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


import API from './API';
import {Link, useLocation} from 'react-router-dom';
import Checkout from './Checkout';

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



//above config for 

const Login = () => {

const requestProfile = () => {

  async function getProfile(){
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=r_liteprofile&state=123456&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;
      
      const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'},
        method: 'GET',
        url: oauthUrl
        
        
      };

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
  
      console.log('URL is', oauthUrl);
  
      let response = await axios(options);
  
      let responseOK = response && response.ok;
  
      if(responseOK){
        let data=response.data;
        console.log('data is', data);
  


      function getParams(){
      let params = (new URL(document.location)).searchParams; 
     let code1 = params.get("code");
     console.log("This is code 1", code1);
     saveAccessCode(code1);}
     

     
  };
};

getProfile();
   
};

const {linkedInLogin} = useLinkedIn({
    clientId:'86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`,

    onSuccess: (code) => {
      
          saveAccessCode(code);

          console.log("Ther Access Code is:", code);
          


        
      
    },
       
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
          
    /*           if (emailUser && name) 
                return res.json({
                  name: name,
                  profilePic: profilePic,
                  email: emailUser,
                });
    */
              
              
            

    onError: (error) => {
           console.log(error);
    },

  
  });


  function saveAccessCode(code){
    let authyCode= code;
    console.log('AuthyCode is:', authyCode);
    getAccessCode(authyCode);
    return authyCode;
   
  }



 async function getAccessCode(authyCode){

    console.log("Der authy code ees", authyCode);

    let url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${authyCode}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      url: url
      
      
    };

    console.log('URL is', url);

    let response = await axios(options);

    let responseOK = response && response.ok;

    if(responseOK){
      let data=await response.data;
      console.log('data is', data);

    }

  }



//fetch way below
/*   fetch(url, options).then(response => {
    if (!response.ok){
      throw new Error("HTTP Error " + response.status);
    }
      return response.json();})
      .then(data=> console.log(data)); */
     
   /*  

    */
//fetch way above


  
   // const accessToken = response.data ? response.data.access_token : "";

   /* const configA = {
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${accessToken}`,
     },
   }; */

   //console.log("Response is", response);

//   console.log("auth code 2 is:", `${code}`);
  //}

  



//code is received successfully. Can skip to callback.js route; need to pass code to there

//*** */below is for testing purposes, to delete

/* callbackRouter.get('/', function(req, res, next) {
  requestAccessToken(req.query.code,req.query.state)
  .then((response) => {
    requestProfile(response.body.access_token)
    .then(response => {
      console.log(response.body)
      res.render('callback', { profile: response.body});
    })
  })
  .catch((error) => {
    res.status(500).send(`${error}`)
    console.error(error)
  })
});

 */

/* requestAccessToken('AQRRLNrH6-EwDb541E84oMIDrgKBUbt6SM063_-NeNnZow96ZsZvLRFlwvSTpOaHZPjt6ruH6KPq9Uj7jKQjMxVXr-lfjUOV_K39zH7cnOkfFd1Yk8wxtQZ1e419GtV4toHTn1SIRW8AFDu75qbVCsJy-LbXZ7hQn62smCBAMfOL9ktTVdqaOMXgv70QmWIBgYSslK10SqNtK7NamXw', 'DCEeFWf45A53sdfKef424'); */
//***** */above is for testing purposes, to delete

     const[authenticate, setAuthenticate] = useState({
        isAuthorized: false,
       firstName: null,
       lastName: null,
       profileURL: null,
       pictureURL: null,
   }); 
    
 /*   componentDidMount() {
     window.addEventListener('message', this.handlePostMessage);
   }
  */
  
   const handlePostMessage = (event) => {
     if (event.data.type === "profile") {
       updateProfile(event.data.profile);
       alert(`Login successful: ${event.data.profile.localizedFirstName}`,{position:'top'});
      console.log('login successful');
     }
   };
 
//priority #1 get this function above to run
// if cannot achieve prioity #2, then try and get callback function to run

   

  const updateProfile = (profile) => {
     console.log(profile)
       setAuthenticate({
         isAuthorized: true,
         firstName: _.get(profile,'localizedFirstName',''),
         lastName: _.get(profile,'localizedLastName',''),
         profileURL: `https://www.linkedin.com/in/${_.get(profile,'vanityName','')}`,
         pictureURL: _.get(_.last(_.get(profile,'profilePicture.displayImage~.elements','')),'identifiers[0].identifier','')
       })
   }

   //lodash('_').get is used to get the value at the path of an object
 
/*   const requestProfile = () => {
    /*  var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=r_liteprofile&state=123456&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
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
     );  */
 
  
    /*  let params = (new URL(document.location)).searchParams; 
     let code1 = params.get("code");
     console.log(code1); */
  



 
 
     return (
       <div className="App">
         <header className="App-header">
             <button  onClick={linkedInLogin}> Linkedin Login#1 </button>
             <button  onClick={getAccessCode}> getAccessCode </button>
             <button  onClick={requestProfile}> requestProfile </button>

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