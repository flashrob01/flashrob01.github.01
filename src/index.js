
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';

//!!
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache

} from "@apollo/client";

//!! Above from: https://www.apollographql.com/docs/react/get-started/

import {Auth0Provider} from "@auth0/auth0-react";
import store from './store';




require('dotenv').config();


const client = new ApolloClient({
  uri: 'https://bright-mullet-79.hasura.app/v1/graphql',
  cache: new InMemoryCache()
});



ReactDOM.render(
  
  <Auth0Provider
  domain="dev-7-8i89hb.us.auth0.com"
  clientId='stYoaCVnntvABpLxIxIdXnxX4riYXRnF'
  redirectUri='https://ddrc-app.herokuapp.com/'
  
>
<ApolloProvider client={client}>
 

  <Provider store = {store}>
       <App />
     </Provider>

     </ApolloProvider>

     </Auth0Provider>,
  
  document.getElementById('root')
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
