//This file on advice from: https://dev.to/devgeetech/hasura-auth0-for-authenticated-database-granular-access-control-250
/* 
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";



const httpLink = createHttpLink({
  uri: "insert_url_here",
  fetch: (...args) => fetch(...args),
});

async function fetchSession() {
  const res = await axios.get(`/api/session`);
  return res.data.session.idToken;
}

const authLink = setContext((_, { headers }) => {
  const authLinkWithHeader = fetchSession().then((token) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return authLinkWithHeader;
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client; */