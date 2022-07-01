import "./../styles/header.css";
import AuthNav from "./auth-nav";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

//below from https://auth0.com/docs/libraries/auth0-single-page-app-sdk#create-the-client

import createAuth0Client from "@auth0/auth0-spa-js";
//

const Header = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header>
      <NavLink to="/Home">
        <div id="DDRlogo">
          <img
            src={require("../images/ddr_Logo2_040522.png").default}
            className="App-logo"
          />
        </div>
      </NavLink>

      <AuthNav className="authNav" />
    </header>
  );
};

export default Header;

//  <h1>DDRC</h1>
//<h2>Distributed Data, Research, and Consulting</h2>
