import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { Loader} from 'react-tableql'

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const UsersQuery = gql`
     {
  query MyQuery {
    users {
      created_at
      user_id
    }
  }
  `;

  const { loading, error, data } = useQuery( UsersQuery);  

  if(loading){
    return(<Container>
      <Loader />
      </Container>);
  }

  else{


/*   const getUserMetaData = async() => {
      const domain = "";

  try{
  const accessToken = await getAccessTokenSilently();
   //the above is from: https://auth0.github.io/auth0-react/interfaces/auth0_context.auth0contextinterface.html#getaccesstokensilently
  const result = await fetch('https://bright-mullet-79.hasura.app/v1/graphql', {
      method: 'GET',
      headers: {
          Authorization: 'Bearer' + accessToken
      }
  });
  const data= await result.json();
  console.log(data);
  */


//useEffect from auth0 "calling an API" tutorial - https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#set-up-the-auth0-service
// calling an API from- https://auth0.com/docs/libraries/auth0-single-page-app-sdk#create-the-client
/* useEffect(() => {
    const getUserMetadata = async () => {
     
      try {

        const accessToken = await getAccessTokenSilently();
        const result = await fetch('https://bright-mullet-79.hasura.app/v1/graphql/', {
           method: 'POST',
           headers: {
               Authorization: 'Bearer' + accessToken
           }
       });
       const data= await result.json();
       console.log('This is data', data);

        } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
}, [getAccessTokenSilently, user?.sub]);
     */
  

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.first_name} />
        <h2>{user.first_name}</h2>
        <p>{user.email}</p>
        <p>{user.user_id}</p>
        
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
}
};

export default Profile;
