import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { Loader, ApolloTableQL  } from 'react-tableql'
import './../styles/Profile.css';
import {Link, useNavigate} from 'react-router-dom';



const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

const GET_SELL_OFFERS_QUERY = gql`
query getSellOffers($userId: String!) {
  sell_offers(where: {userId: { _eq: $userId}}) {
    industry
    user_id
  }
}
`;

const userId = user.sub;

console.log(userId); //It should be noted that this returns the proper user ID in the console!

const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_SELL_OFFERS_QUERY, {
  variables: { userId }   
   }
);

if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;  

else{

  return (
    isAuthenticated && (
        <Container>
        <h4>My sell offers</h4>
        <ApolloTableQL
  query={GET_SELL_OFFERS_QUERY}
  columns={['industry',  'user_id' ]}  />
       </Container>
    )
  );
};
}

export default Profile;

   /* ApolloTableQL
  query={UsersQuery}
  columns={['first_name', 'last_name','user_id', 'created_at' ]}
   /> */

   //Having weird issue when trying to fetch from more than one database. For now, just fetch from one database until further notice...