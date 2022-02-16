import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GetProfile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

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


//useEffect from auth0 "calling an API" tutorial
// calling an API from- https://auth0.com/docs/libraries/auth0-single-page-app-sdk#create-the-client
useEffect(() => {
    const getUserMetadata = async () => {
     
      try {

        const accessToken = await getAccessTokenSilently();
        const result = await fetch('https://bright-mullet-79.hasura.app/v1/graphql', {
           method: 'GET',
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
  
    
  },);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default GetProfile;