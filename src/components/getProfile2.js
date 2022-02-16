import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";
require('isomorphic-fetch');


const API_URL = "https://bright-mullet-79.hasura.app/v1/graphql/";

const GetProfile2 = ({
  children,
}) => {
  const { getAccessTokenSilently } = useAuth0();

  const authLink = setContext(async (_, { headers }) => {
    let accessToken = null;
    try {
      accessToken = await getAccessTokenSilently();
    } catch (e) {
      console.log({ e });
    }

    headers = { ...headers };
    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`;
    }

    return { headers };
  });

  const httpLink = createHttpLink({
    fetch,
    uri: API_URL,
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  console.log('This is client', client);

  return (
      <div>
  <ApolloProvider client={client}>{children}</ApolloProvider>
  <h1> {client} </h1>
  </div>
    )

}

export default GetProfile2;
