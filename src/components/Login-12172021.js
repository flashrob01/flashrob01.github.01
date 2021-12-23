import React, {useState, useEffect, Component} from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import queryString from "query-string";
import _ from "lodash";
import {Typography, Button} from "@material-ui/core";
////import './../styles/login.css';
import {useDispatch, useSelector} from 'react-redux';
import {talkingToCustomerDb, talkedToCustomerDb, talkingToCustomerDbFailed, selectCustomer} from '../slice_reducers/customerSlice';

import ProfileCard from "./ProfileCard";

import { useLinkedIn } from 'react-linkedin-login-oauth2';
//import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

require('dotenv').config();
const axios = require("axios");


const Login = () => {

  const router = useRouter();

  const [user, setUser] = useState("");
  const LinkedIn = {
    response_type: "code",
    client_id: "868dd98yvyhfen",
    redirect_uri: "http://localhost:3000/",
    state: "DCEeFWf45A53sdfKef424",
    scope: `r_liteprofile`,
  }

  const profileURL = queryString.stringify(LinkedIn);

  const authURL = `https://www.linkedin.com/oauth/v2/authorization/?${profileURL}`;

  const requestSever = async () => {
    const { code} = router.query;
    //router.query is destructuring this object; i'd presume making 'code' and 'state' into variables you can extract and use?
    if (code === undefined) return;
  //  const authToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/auth/${code}`);
      if (response.status === 200) {
        setUser(response.data);
        router.push("/");
        //router.push redirects the user to path "/"?
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    requestSever();
  });

//useEffect runs requestSever() only on first render or when dependency variables (prop, state) change. Router.query is a prop value?


  const imageURL = _.get(
    _.last(_.get(user, "profilePicture.displayImage~.elements", "")),
    "identifiers[0].identifier",
    ""
  );

    return(
      <div className ={StyleSheet.container}>
        <Head>
          <title> Create Next App </title>
          <link rel = "icon" href="/favicon.ico" />
        </Head>

        <main className={StyleSheet.main}>
          <Typography variant = "h6"> React LinkedIn Login Example </Typography>
          <Typography variant = "body2" style={{margin:"20px"}}>
            Login using LinkedIn Oauth
          </Typography>
          {user ==="" ? (
            <Button color = "primary" variant="contained">
              <a href={authURL}> Sign in with LinkedIn </a>
            </Button>
          ): (
            <div style={{ textAlign: "center"}}>
              <Typography variant ="h6">
                Name: {user.localizedFirstName + " " + user.localizedLastName}
              </Typography>
            
            </div>
          )}
        </main>
      </div>
    )


  }
  
export default Login;


//  <img src ={imageURL} style={{ width: "25em"}} />