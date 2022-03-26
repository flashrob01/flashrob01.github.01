import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { Loader, ApolloTableQL  } from 'react-tableql'
import './../styles/Profile.css';
import {Link, useNavigate} from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';



const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);



  const UsersQuery = gql`
  {
 
 users {
   created_at
   user_id
   first_name
   last_name
   sell_offers
   buy_offers
 }

}
`;

async function getUserId(){
 const userId = user.sub;
 return userId;
 
}

const GET_SELL_OFFERS_QUERY = gql`
query getSellOffers($userId: String) {
  sell_offers(where: {user_id: { _eq: $userId}}) {
    industry
    languages
    user_id
  }
}

`;

const GET_BUY_OFFERS_QUERY = gql`
 {
  buy_offers(where: {user_id: {_eq: "linkedin|uiWV-hd6Jm"}}) {
    industry
    user_id
  }
}

`;



/* const { loading, error, data } = useQuery( UsersQuery);   */

 

   console.log('this is the userId:', userId);

const {loading:user_loading, error:user_error, data:user_data } = await useQuery(GET_SELL_OFFERS_QUERY, {
  variables: { getUserId }   
   }
);

/* if(loading) return 'Loading...';
if(error) return `Error! ${error.message}`;    
 */

let navigate = useNavigate();


function redirectTo(props) {
  navigate(`/sell/${props}`);
}


if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;  


else{



 

  return (
    isAuthenticated && (
      <div>
        <div id="userInfo">
        <img src={user.picture} alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>{user.last_name}</p>
        <p>User Id: {user.sub}</p>
        </div>
     <br></br>
        <Container>

        <h4>My sell offers</h4>
        <ApolloTableQL
  query={GET_SELL_OFFERS_QUERY}
  columns={['industry',  'languages', 'user_id' ]}
  onRowClick={data => redirectTo(data.sell_offer_id)}
  variable={userId}
  />
       </Container>

       <Container>

        <h4>My buy offers</h4>
        <ApolloTableQL
  query={GET_BUY_OFFERS_QUERY}
  columns={['industry',  'user_id' ]}
   />
       </Container>

       <Container>

            <h4>My reviews</h4>
        
            </Container>

      </div>
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