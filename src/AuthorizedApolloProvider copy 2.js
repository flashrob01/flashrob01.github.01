
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const AuthorizedApolloProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();

  //-added from 2nd part of: https://nextsteps.dev/apollo-client-graphQL-and-auth
  const authMiddleware = setContext(async (_, { headers, ...context }) => {
    const token = await getAccessTokenSilently();
    //-

    //-added from 2nd part of: https://nextsteps.dev/apollo-client-graphQL-and-auth

    return {
        headers: {
            ...headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        ...context,
    };
});

//-

  const httpLink = createHttpLink({
    uri: 'https://bright-mullet-79.hasura.app/v1/graphql/', // your URI here...
  });

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently();

    

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default AuthorizedApolloProvider;

