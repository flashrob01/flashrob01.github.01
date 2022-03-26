//from: https://medium.com/ovrsea/token-authentication-with-react-and-apollo-client-a-detailed-example-a3cc23760e9
//compare to: https://www.apollographql.com/docs/react/networking/advanced-http-networking/#customizing-request-logic
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { HttpLink } from "@apollo/client";
//import { useAuthToken } from "./auth";
//Replaced this with 'await getAccessTokenSilently();'

import { useAuth0 } from '@auth0/auth0-react';

const httpLink = new HttpLink({ uri: "https://bright-mullet-79.hasura.app/v1/graphql/" });

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }

    return forward(operation);
  });

const cache = new InMemoryCache({});


export const useAppApolloClient = async () => {
    const { getAccessTokenSilently } = useAuth0();

  const [authToken] = await getAccessTokenSilently();
  return new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache,
  });
};