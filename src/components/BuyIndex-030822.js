import axios from "axios";
import React, { useEffect, useCallback, useMemo, useState } from "react";
import tw from "twin.macro";
import { useLocation, useParams } from 'react-router-dom';
import API from './API';
import './../styles/Buy.css';
import {Outlet, Link} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { gql} from '@apollo/client';
import QueryResult from './query-result';
import TrackDetail from './track-detail';
import  Layout from './layout';
import { Query } from "react-apollo";
import {InMemoryCache as cache} from "@apollo/client";


//*Below from Apollo Catstronauts
import styled from '@emotion/styled';
import {
  IconRun,
  IconView,
  IconTime,
  IconBook,
} from '../styles';
import { humanReadableTimeFromSeconds } from '../utils/helpers';
import ContentSection from './content-section';
import MarkDown from './md-content';
import { userInfo } from "os";
//*




const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
`;

const GET_BUY_OFFERS_QUERY = gql`
query GetUsers{
users(where: {user_id: number}) {
user_id
first_name
}
}

`;



const GET_USERS = gql`
  query GetUsers{
    users(where: {user_id: {_eq: "linkedin|uiWV-hd6Jm"}}){
      user_id
      email
         }
  }
`;


 

const BuyIndex = function(){ 
  const {number} = useParams();


  cache.writeData({
    data: {
      buy_offer_id1: number
    }
  })


  //How to properly use useParams()-  https://reactgo.com/react-router-useparams-hook/

  var number1 = Number(number); 


  console.log('useParams value:', number1);

/* 
  const {buy_offer_id} = useParams();
  //returns the location buy_offer_id value within the URL

  console.log('Buy offer ID is:', buy_offer_id);
  
   const[buyOffer, setBuyOffer] = useState([]);  */

///////

   const {loading, error, data } =  useQuery(GET_BUY_OFFERS_QUERY, {
    variables: {first_name: 'Robert'},
});

   
/*   const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_USERS);
 */
  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    
  
 const OfferData = JSON.stringify(data, null, 2);

 console.log('this is offer data', OfferData);

 const values = Object.values(data);

 console.log('this is the offer data', values);
/*  console.log('this is the buy offer data', data.GET_BUY_OFFERS_QUERY);
 *//*  console.log('this is the buy offer id', data.buy_offers[0].buy_offer_id);
 */ //Note - when looking at the returned object in devtools, it is in format object of array of object. Thus, need to access property using the above!!



    /* const filteredItems = values.buy_offers.find(function(item) {
    return (item.buy_offer_id === number); 
  }
  ); */


/*   if(user_loading) return 'Loading...';
 if(user_error) return `Error! ${user_error.message}`;  

 const users1 = Object.values(user_data);

 const filteredUsers = users1.filter((item) => {
  return (item.user_id === 'linkedin|uiWV-hd6Jm'); 
}
); */

/* const foundItem = values.buy_offers.find(function(item) {
  return item.buy_offer_id === number; 
}
); */

/* 
 console.log('this is the user data', user_data);


 console.log('this is the user id', user_data.users[0].user_id); */

  
/*  console.log('this is filtered item', filteredItems );
 */
/*  console.log('this is found item', foundItem ); */


//This is so frustrating! I can't understand why any functions above the line from 'return' to get from the database come out UNDEFINED, but 
//but only work when under the return statement??? Tried Find, Map, Reduce, all types of variables, EVERYTHING!!!!
/// Found the reason why- Looking at dev tools- after the object name, there is an additional  0,1,2 title given to each 
// item that is not included in the SQL database! This needs to be referenced explicitly, or else 'undefined' will be returned!!

 

return (
 
<div>

{data.users[0].user_id}

<div>
</div>
</div>
)

};

export default BuyIndex;

/* , {
  variables: {
    buy_offer_id: number
} */
/*D   */

/* const GET_BUY_OFFERS_QUERY = gql`
query GetBuyOffers($number: String!) {
  buy_offers(buy_offer_id: $number) {
    user_id
    price
    
  }
}

`; */