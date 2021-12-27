import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
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
const request = require('superagent');


const Login = () => {
   
const {linkedInLogin} = useLinkedIn({
    clientId:'86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`,

    

    onSuccess: (code) => {
          console.log(code);
       
          alert('Login via LinkedIn to DDRC successful',{position:'top'});

          axios.get(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

          const configA = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer${accessToken}`,
            }
          };
            const userData = await axios.get("https://api.linkedin.com/v2/me",configA);
              const name=
              userData.data.localizedFirstName + userData.data.localizedLastName?userData.data.localizedFirstName+""+
              userData.data.localizedLastName:"";
              
            const profilePicture= await axios.get("https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
            configA);
            const elements= profilePicture.data.profilePicture["displayImage~"].elements;
            const identifier= elements&&elements.length>0?elements[elements.length-1].identifiers:{};
            const profilePic= identifier&& identifier[0]&&identifier[0].identifier;

            const emailUser=
            emailData.data&&emailData.data.elements&&
            emailData.data.elements[0]?emailData.data.elements[0]["handle~"].emailAddress:"";
          
           function requestAccessToken(code,state) {
            return request.post('https://www.linkedin.com/oauth/v2/accessToken')
              .send('grant_type=authorization_code')
              .send(`redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`)
              .send(`client_id=${process.env.REACT_APP_CLIENT_ID}`)
              .send(`client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
              .send(`code=${code}`)
              .send(`state=${state}`)
          }
          
          function requestProfile(token) {
            return request.get('https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))')
            .set('Authorization', `Bearer ${token}`)
          }
    },
    onError: (error) => {
           console.log(error);
    },
});

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

function requestAccessToken(code,state) {
  return request.post('https://www.linkedin.com/oauth/v2/accessToken')
    .send('grant_type=authorization_code')
    .send(`redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`)
    .send(`client_id=${process.env.REACT_APP_CLIENT_ID}`)
    .send(`client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    .send(`code=${code}`)
    .send(`state=${state}`)
}

 function requestProfile2(token) {
  return request.get('https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))')
  .set('Authorization', `Bearer ${token}`)
}  */

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

    /*  let params = (new URL(document.location)).searchParams; 
     let code1 = params.get("code");
     console.log(code1); */
   };



 
 
     return (
       <div className="App">
         <header className="App-header">
             <button  onClick={linkedInLogin}> Linkedin Login#1 </button>
                
               
           <h1 className="App-title">DDRC- React Linkedin Login</h1>
           <p className="App-intro">A demo page for Linkedin login</p>
          
           React-Linkedin-Login for DDRC App
         </header>
         <div className="App-body">
           <button onClick={requestProfile}>Linkedin Login</button>
           <button onClick={handlePostMessage}>HandlePostMEssage</button>
         
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
