import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import store from "../../store.js";
import { Route, Redirect } from "react-router-dom";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { Button } from "carbon-components-react";
import { Typography, CircularProgress } from "@material-ui/core";

const config = require('dotenv').config();


const SSOWithLinkedin = ({ linkedinResponseSSO, linkedinResponseLoading }) => {
  const handleSuccess = async (data) => {
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
        disabled={linkedinResponseLoading}
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri={`${window.location.origin}/linkedin/auth`}
      //  scope={config.linkedindefaults.scope}
        renderElement={({ onClick, disabled }) => (
          <Button
            className="full-width text-color-sso"
            kind="ghost"
            onClick={onClick}
            disabled={disabled}
            id="sign-in-button"
          >
            Sign up with LinkedIn
          </Button>
        )}
      ></LinkedIn>
    </React.Fragment>
  );
};

SSOWithLinkedin.propTypes = {};

 const mapStateToProps = (state) => ({
  linkedinResponseLoading: state.auth.linkedinResponseLoading,
}); 

 export default connect(mapStateToProps, { linkedinResponseSSO })(
  SSOWithLinkedin
);

