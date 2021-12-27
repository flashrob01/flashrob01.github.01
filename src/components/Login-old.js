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


require('dotenv').config();


const Login = () => {
   
const {linkedInLogin} = useLinkedIn({
    clientId:'86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`,

    

    onSuccess: (code) => {
          console.log(code);
    },
    onError: (error) => {
           console.log(error);
    },
});



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

    const getAuthCode = () => {
       let params = (new URL(document.location)).searchParams; 
       let code1 = params.get("code");
       console.log(code1);

    }


   useEffect(() => {
    window.addEventListener('message', handlePostMessage);
  
  });
 
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

     let params = (new URL(document.location)).searchParams; 
     let code1 = params.get("code");
     console.log(code1);
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
           <button onClick={getAuthCode}>Get Auth Code</button>
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
