//import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

require("dotenv").config();
const axios = require("axios");

const Logout = () => {
  return (
    <div className="pageContainer">
      <div id="banner">
        <h1>Logout Page</h1>
      </div>

      <div id="secured" />
      <p> Secured by escrow </p>
    </div>
  );
};

export default Logout;
