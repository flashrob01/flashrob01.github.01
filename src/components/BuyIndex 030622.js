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





const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;

const GET_BUY_OFFERS_QUERY = gql`
  query GetBuyOffers {
    buy_offers(where: {buy_offer_id: {_eq: "1"}}) {
      user_id
      price
      buy_offer_id
    }
  }
`;

const GET_USERS = gql`
  query GetUsers{
    users{
      user_id
      email
         }
  }
`;



 

const BuyIndex = function(){ 

  const {buy_offer_id} = useParams();

  
/* 
  const {buy_offer_id} = useParams();
  //returns the location buy_offer_id value within the URL

  console.log('Buy offer ID is:', buy_offer_id);
  
   const[buyOffer, setBuyOffer] = useState([]);  */

///////

   const {loading, error, data } =  useQuery(GET_BUY_OFFERS_QUERY);

  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    
  
 const OfferData = JSON.stringify(data, null, 2);

 console.log('this is offer data', OfferData);

 const values = Object.values(data);

 console.log('this is the offer data', values.buy_offer_id);
 console.log('this is the buy offer data', data.buy_offers);
 console.log('this is the buy offer id', data.buy_offers[0].buy_offer_id);
 //Note - when looking at the returned object in devtools, it is in format object of array of object. Thus, need to access property using the above!!


    const filteredItems = values.filter((item) => {
    return (item.buy_offer_id === '1'); 
  }
  );
  


       

//This is so frustrating! I can't understand why any functions above the line from 'return' to get from the database come out UNDEFINED, but 
//but only work when under the return statement??? Tried Find, Map, Reduce, all types of variables, EVERYTHING!!!!
/// Found the reason why- Looking at dev tools- after the object name, there is an additional  0,1,2 title given to each 
// item that is not included in the SQL database! This needs to be referenced explicitly, or else 'undefined' will be returned!!




return (

  <div>
    {data.buy_offers[0].buy_offer_id}Here BE

  { Object.entries(filteredItems).map(([none, { price, industry, offer_details, offer_type, qualifications, user_id }]) =>
  <div>
    <div key ={buy_offer_id } className="offer" id='offer'>
 <Link to={`/Buy/${buy_offer_id}`}>
 <h2>You selected to purchase:  {buy_offer_id} </h2>
 </Link>

 <Link to= {{
               pathname: `/buy/BuyUserInfo/${buy_offer_id}`}}>
             
              <Button onClick={() => alert("Selecting: " + buy_offer_id)}> Click to see User's LinkedIn verified information
                </Button>
           </Link>


 <h2> Price:  {price} </h2>
 About this offer

 <h2> User id: {user_id} </h2>
 <h2> Offer details: {offer_details} </h2>
 <h2> Industry: {industry} </h2>
 <h2> Offer type: {offer_type} </h2>

 No refunds will be given.

 When you click accept, your NEO will go into Escrow for a period of 24 hours. After that period and you are satisfied with purchase, the escrow will automatically release to the seller. Disputes will not be handled by the exchange, so please be sure to clarify exact discussion points with the seller beforehand.

 About this seller

 <h2> Qualifications: {qualifications}  </h2>

 Linkedin: 

 <div>
</div>



 Send the seller a message:

 <div>
</div>

 <Link to= {{
               pathname: `/buy/escrow/${buy_offer_id}`}}>
             
              <Button onClick={() => alert("Selecting: " + buy_offer_id)}> Continue with purchase
                </Button>
           </Link>
             

</div>        

    )
    )
    </div>  
    

  
  ) 
  
  }
 
 
<h1>WTF??</h1> WTF??
  </div>
 
 )

}        
       
        
    

         export default BuyIndex;

{/*  <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      

  </div> */}