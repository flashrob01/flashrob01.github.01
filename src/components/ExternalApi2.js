// src/views/external-api.js

import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql, useQuery } from '@apollo/client';


const ExternalApi2 = () => {
 // const [message, setMessage] = useState('');
 // const serverUrl = process.env.REACT_APP_SERVER_URL;


  const { loading, error, data } = useQuery( gql`
  query  {
      buy_offers{   
         industry
         price
      }
 
   }
`  )

if(loading) return <p> Loading... </p>;
if(error) return <p> Error :(</p>;

 /*  const token =  getAccessTokenSilently(); */



  /* const CallSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const createApolloClient = (token) => {
        return new ApolloClient({
          link: new HttpLink({
            uri: `${serverUrl}`, 
            headers: {
              method: 'POST',
              Authorization: `Bearer ${token}`
            }
          }),
          cache: new InMemoryCache(),
        })
      };

    } catch (error) {
      setMessage(error.message);
    }
   */


  

                                       
                                   

                                
                                    
                                     
                                    
                                  /*   
                                    if (loading) {
                                        return <div>Loading...</div>;
                                    } 
                                    if (error) {
                                        console.error(error);
                                        return <div>Error!</div>;
                                    }
                                   
                                    console.log('This is data', data); */
                                           


     

  return (
    <div className="container">
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
     <div>{JSON.stringify(data)}</div>
     
      </div>
     
    </div>
  );
};

export default ExternalApi2;

//<code className="col-12 text-light bg-dark p-4"> <TodoPrivateList todos={data.todos} /> </code>

// <div>{JSON.stringify(data)}</div>;