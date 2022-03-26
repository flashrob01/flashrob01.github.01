import React, {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import './../styles/CreateBuy.css';
//const axios = require('axios');
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { ApolloClient, gql, useQuery, useMutation, InMemoryCache, HttpLink, ApolloProvider, } from '@apollo/client';



/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/

/* // This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://bright-mullet-79.hasura.app/v1/graphql",
  }),
}); */

const UNNAMED_MUTATION1_MUTATION = gql`
  # Consider giving this mutation a unique, descriptive
  # name in your application as a best practice
  mutation unnamedMutation1 {
    insert_test_table(objects: [{test: "28", test2: "2bleh", test3: "2222"}]) {
      affected_rows
    }
  }
`;

const CreateTest2 = () => {

  const [unnamedMutation1, {data, loading, error}] = useMutation(UNNAMED_MUTATION1_MUTATION);

  return (
    <div class='flex-container'>
    
        <div class = 'pageContainer'>
       
       <h2 class='Headline'> 
        CREATE AN OFFER TO TEST
       </h2>         
       <br></br>
  
    </div>
   
    </div>
    
       );
    }





    
        export default CreateTest2;
