import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import store from "../../store.js";
import { Route, Redirect } from "react-router-dom";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { Button } from "carbon-components-react";
import { Typography, CircularProgress } from "@material-ui/core";

const config = require('dotenv').config();

//this code doesn't work. IT also looks nonsensical, calling a parent within a child? No wonder it doesn't work.
const SSOWithLinkedin = function(linkedinResponseSSO){
  const handleSuccess = async function(data) {
    await linkedinResponseSSO({
      authCode: data.code,
      redirectUri: `${window.location.origin}/linkedin/auth`,
    });
  };
  const handleFailure = (error) => {
    console.log(error);
  };

  return (
   
    <React.Fragment>
      <LinkedIn
   
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri={`${window.location.origin}/linkedin/auth`}
        >
      
       
    <  button  onClick={handleSuccess}  > Linkedin Login#1 </button>
         
         
      
      </LinkedIn>
    </React.Fragment>
  )
 
};

SSOWithLinkedin.propTypes = {};

/*  const mapStateToProps = (state) => ({
  linkedinResponseLoading: state.auth.linkedinResponseLoading,
});  */

 export default (
  SSOWithLinkedin
);

/* export default connect(mapStateToProps, {})(
  SSOWithLinkedin
);
 */
