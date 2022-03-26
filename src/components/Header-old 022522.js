
import './../styles/header.css';
import AuthNav from './auth-nav';

//below from https://auth0.com/docs/libraries/auth0-single-page-app-sdk#create-the-client

import createAuth0Client from '@auth0/auth0-spa-js';
//

const Header = () => {
    
    function dudu () {
   
    };
    
    dudu();

    const onClick =  () => {

        const auth0 =  createAuth0Client({
            domain: 'dev-7-8i89hb.us.auth0.com',
            client_id: 'stYoaCVnntvABpLxIxIdXnxX4riYXRnF'
          });

         auth0.loginWithRedirect({
            redirect_uri: 'http://localhost:3000',
        });

        const user = auth0.getUser();
      }



    return (
        <header>
        <div className="columnFlex">
      

        <div id = "DDRlogo">
    
    <img src={require("../images/ddrc-logo.png").default} className="App-logo"/>
   
    </div>
        </div>

    <button onClick={onClick} id="login"> Click to Login with SPA-SDK </button>    
        
    <AuthNav />
   
          </header>
    )
};

export default Header

//  <h1>DDRC</h1>
//<h2>Distributed Data, Research, and Consulting</h2>
