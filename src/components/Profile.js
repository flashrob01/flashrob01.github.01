import  { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql } from '@apollo/client';
/* import { Loader, ApolloTableQL  } from 'react-tableql'
 */import './../styles/Profile.css';
import {Link, useNavigate} from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { Table } from 'react-bootstrap';



const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  let navigate = useNavigate();
  
  const [visible, setVisible] = useState('false');




const GET_SELL_OFFERS_QUERY = gql`
query getSellOffers($userId: String) {
  sell_offers(where: {user_id: { _eq: $userId}}) {
    industry
    languages
    user_id
    offer_type
    qualifications
    offer_details
    price
    sell_offer_id
    headline
  }
}

`;

const GET_BUY_OFFERS_QUERY = gql`
query getBuyOffers($userId: String) {
  buy_offers(where: {user_id: { _eq: $userId}}) {
    industry
    languages
    user_id
    offer_type
    qualifications
    offer_details
    price
    buyOfferId
    headline
    rate_type
  }
}

`;



/* const { loading, error, data } = useQuery( UsersQuery);   */

const userId = user.sub;


   console.log('this is the userId:', userId);

/* const {loading:user_loading, error:user_error, data:user_data } = useQuery(GET_SELL_OFFERS_QUERY, {
  variables: { userId }   
   }
); */
//UseQuery goes unused!! Using UseLazyQuery instead!


const [getUser, { loading, error, data }] = useLazyQuery(GET_SELL_OFFERS_QUERY, {

  onCompleted: () => {
    setVisible('true');
  }
  });

  const [getUserBuy, {loading:user_loading_buy, error:user_error_buy, data:user_data_buy}] = useLazyQuery(GET_BUY_OFFERS_QUERY, {

    onCompleted: () => {
      setVisible('true');
    }
    });
    
    function getReviews(){
      console.log('empty');
    }

    

    

if (loading) return <p>Loading ...</p>;
if (error) return `Error! ${error}`;

/* if(loading) return 'Loading...';
if(error) return `Error! ${error.message}`;    
 */




/* 
if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;   */

if(user_loading_buy) return <p>Loading...</p>;
if(user_error_buy) return `Error! ${user_error_buy.message}`;  




else{
  return (
    isAuthenticated ? (
      <div id="profileContainer">
      <div>

        <div id="userInfo">
        <img src={user.picture} alt={user.name} id="profilePic" />
        <br></br>
        <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>User ID</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.name} </td>
      <td>{user.email} </td>
      <td>{user.sub} </td>
      
    </tr>
  
  </tbody>
  </Table>

        </div>


     <br></br>

  
     <button class="buttonProfile" onClick={() => getUser({ variables: { userId } })
    }>
        My Requests
      </button> 
     
      <button class="buttonProfile" onClick={() => getUserBuy({ variables: { userId } })
    }>
        My Offers
      </button>
     
      <button class="buttonProfile" onClick={() => getReviews({ variables: { userId } })
    }>
        My Reviews
      </button>
     
            </div>          
    
      
      {(visible ==="true" && data) ? (
      <div id="showSellOffers">
                Sell Offer Data
        <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>Headline</th>
      <th>Offer details</th>
      <th>Offer type</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.sell_offers[0].headline} </td>
      <td>{data.sell_offers[0].offer_details} </td>
      <td>{data.sell_offers[0].offer_type} </td>

    </tr>
  
  </tbody>


</Table>

{ data ? (
    <Link to={`/EditSellOffer/${data.sell_offers[0].sell_offer_id}`}>
      <br></br>
  <button  class='buttonProfile'>
        Click to edit sell offer
      </button>
      </Link>
         )   :( "")
  }

</div>
         ) :(
          ('')
         )
         }




{(visible ==="true" && user_data_buy) ? (
      <div id="showBuyOffers">
                Buy Offer Data
        <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>Headline</th>
      <th>Offer details</th>
      <th>Offer type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user_data_buy.buy_offers[0].headline} </td>
      <td>{user_data_buy.buy_offers[0].offer_details} </td>
      <td>{user_data_buy.buy_offers[0].offer_type} </td>
    </tr>
  
  </tbody>

  
</Table>
{ user_data_buy ? (
  <Link to={`/EditBuyOffer/${user_data_buy.buy_offers[0].buyOfferId}`}>
  <button class="buttonProfile">
        Click to edit buy offer
      </button>
      </Link>
         )   :( "")
  }

</div>
         ) :(
          ('')
         )
         }




   </div>  
   ) : 
      ('')
        




      
    )
  

}

}

export default Profile;

   /* ApolloTableQL
  query={UsersQuery}
  columns={['first_name', 'last_name','user_id', 'created_at' ]}
   /> */

   //Having weird issue when trying to fetch from more than one database. For now, just fetch from one database until further notice...