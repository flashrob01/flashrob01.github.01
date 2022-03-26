import React, { FC, useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ApolloClient} from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { ApolloProvider } from '@apollo/client';
import { Login } from '../auth/Login';
import { Logout } from '../auth/Logout';

const createApolloClient = (authToken: string) => {
return new ApolloClient({
    link: new WebSocketLink({
        uri: 'https://bright-mullet-79.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams: {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        }
    }),
    cache: new InMemoryCache(),
});
};

export const WithApolloProvider: FC = ({ children}) =>  {
    const [client, setClient] = useState<any|null>(null);
    const { isAuthenticated, getAccessTokenSilently } = useAuth0(); // getIdTokenClaims</any|null>

    const fetchIdTokenClaims = async() =>{
        const authToken = await getAccessTokenSilently();
        const newApolloClient = createApolloClient(authToken);
        setClient(newApolloClient);
};

useEffect(() => {
    if(isAuthenticated) fetchIdTokenClaims();
}, [isAuthenticated]);

if(!isAuthenticated){
    return(
        <div className="apollo">
            <Login>

            </Login>
        </div>
    );
};

if(!client){
    return(
        <div className="apollo">
            <Logout>

            </Logout>
        </div>
    )
}

return(
    <ApolloProvider client={client}>
        {children}
        <Logout>
            
        </Logout>
    </ApolloProvider>
)
}