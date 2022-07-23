import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* import {Provider} from 'react-redux';
 */ import { InMemoryCache } from "@apollo/client";
import AuthorizedApolloProvider from "./AuthorizedApolloProvider";
import { Auth0Provider } from "@auth0/auth0-react";

const cache = new InMemoryCache();

/* import store from './store';
 */
//wrapping with ApolloClient allows us to access top-level Apollo Client from anywhere within app...???
//https://odyssey.apollographql.com/lift-off-part1/the-usequery-hook

//const { getAccessTokenSilently } = useAuth0();
//results in error!!!

//How do I get the token at the outset?
//Answer- according to https://community.auth0.com/t/how-to-use-react-auth0-spa-with-graphql/30516/4;
//Wrap with AuthorizedApolloProvider instead, because calling useAuth0() from here will result in an error!!!
/* const client = new ApolloClient({
  uri:'https://bright-mullet-79.hasura.app/v1/graphql/',
  headers: {
    method: 'POST',
    Authorization: `Bearer ${token}`
  },
  cache: new InMemoryCache()
});
 */

require("dotenv").config();

ReactDOM.render(
  <Auth0Provider
    domain="dev-7-8i89hb.us.auth0.com"
    clientId="stYoaCVnntvABpLxIxIdXnxX4riYXRnF"
    // redirectUri='http://localhost:3000'

    //Note- unfreeze above and freeze below when going from production to local testing!
    redirectUri="https://ddr-store.herokuapp.com/"
    audience="hasura"
  >
    <AuthorizedApolloProvider graphQLClientConfig={{ cache }}>
      <App />
    </AuthorizedApolloProvider>
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<Note- wrapped Provider around App, which allows react-redux functionality to take place...>

//import 'bootstrap/dist/css/bootstrap.min.css';
//removed so that auth0 could work for heroku deployment

//This below is for ElephantSQL!
/* const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
}); */
//This above is for ElephantSQL!
