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

//Need to change type of buy_offer_id within Hasura to int!


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
query MyQuery($buyOfferId: Int!){
  buy_offers(where: {buyOfferId: {_eq: $buyOfferId}}){
    price
    qualifications
    offer_type
    buyOfferId
  }
}

`;

const BuyIndex = function(){ 

   const { buyOfferId } = useParams();



  const num = Number(buyOfferId);  

  console.log('buyOfferId:', buyOfferId);
  console.log('This is num:', num);

   const {loading, error, data } =  useQuery(GET_BUY_OFFERS_QUERY, {
     variables: {buyOfferId: num},
   });
  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    
  
 return (
<div><pre>
{JSON.stringify(data, null, 2)}
</pre></div>
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

/* const GET_BUY_OFFERS_QUERY = gql`
query BuyOffers($search:ID!){
 price(search: $search) {
  user_id
  price
}
} */