import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const GetProfile3 = () => {

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://hasura.io/learn/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

console.log(createApolloClient);

return(
<div>
</div>
)
};

export default GetProfile3;



