
import './../styles/header.css';
import AuthNav from './auth-nav';
import { useAuth0 } from "@auth0/auth0-react";


//below from https://auth0.com/docs/libraries/auth0-single-page-app-sdk#create-the-client

import createAuth0Client from '@auth0/auth0-spa-js';
//

const Header = () => {
  
    const { loginWithRedirect } = useAuth0();


    return (
        <header>
      

        <div id = "DDRlogo" >
    
    <img src={require("../images/ddrc-logo.png").default} className="App-logo" />
   
    </div>
        
    <img src={require("../images/linkedin.png").default} className="linkedInSignIn" onClick={() => loginWithRedirect()}/>
        
    <AuthNav className="authNav"/>
   
   

          </header>

          
    )
};

export default Header

//  <h1>DDRC</h1>
//<h2>Distributed Data, Research, and Consulting</h2>
