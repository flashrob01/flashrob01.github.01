
//Solution from: https://community.auth0.com/t/how-to-use-react-auth0-spa-with-graphql/30516/4

import { ApolloClient, ApolloProvider, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloLink, concat } from 'apollo-link';

import { setContext } from '@apollo/client/link/context';
import React, { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const AuthorizedApolloProvider = ({ children }) => {

    const { getAccessTokenSilently } = useAuth0();
//--https://stackoverflow.com/questions/67378001/detecting-if-apollo-has-finished-configuration-before-allowing-queries
    const [token, setToken ] = useState();

    useEffect(() => {
        try{
            const token = getAccessTokenSilently();
            setToken(token);
        }catch(e){
        }
    }, []);

    if(!token) return '...loading';

    const authLink = setContext(() => {

    })

    const links = [authLink, HttpLink];

    const client = new ApolloClient({
        link: ApolloLink.from(links),
        cache: new InMemoryCache({ addTypename: false})
    })
//--

  
/* 
  const httpLink = createHttpLink({
    uri: 'https://bright-mullet-79.hasura.app/v1/graphql/', // your URI here...
  });

  const authMiddleware = new ApolloLink(async (operation, forward) => {
    const token = await getTokenSilently();  
    operation.setContext({
          headers: {
            Authorization: `Bearer ${token}` 
          }
      });
      return forward(operation);
  })

   const authLink = setContext(async () => {
    const token = await getTokenSilently();
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  });
   
  const apolloClient = new ApolloClient({
    link: authLink.concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  }); */

  return (
    <ApolloProvider client={ApolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default AuthorizedApolloProvider;

