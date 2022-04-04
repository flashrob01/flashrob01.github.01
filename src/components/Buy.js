/* import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "./globalFilter";
import API from './API'; */
import './../styles/Buy.css';
import {useNavigate} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { Loader, ApolloTableQL } from 'react-tableql'
//Updated React Table to use this very helpful module! https://github.com/Danilo-Zekovic/react-tableql-example-app








function Buy ( props ) {



  const BuyOffersQuery = gql`
  query GetBuyOffers @cached {
      buy_offers {   
         headline 
         industry
         price 
         offer_type
         offer_details
         user_id
         buyOfferId
      }
 
   }
` ;

let navigate = useNavigate();


function redirectTo(props) {
  navigate(`/buy/${props}`);
}
//Redirecting to another page using react-router-dom is so much easier with useNavigate!

  const onClick = (event) => {
    return event.buyOfferId;
  }

  const { loading, error, data } = useQuery( BuyOffersQuery, {
    fetchPolicy: "cache-and-network",

  });  

  if(loading){
    return(<Container>
      <Loader />
      </Container>);
  }

  else{

  return (
    ( data) ? (
    <Container>
      <h5>Research, Consulting and Data Requests </h5>
      <h2>Click for details</h2>
     <ApolloTableQL
  query={BuyOffersQuery}
  columns={['headline', 'industry']}
  sort
  onRowClick={data => redirectTo(data.buyOfferId)} 
  id='ApolloTable'

  />
  
 
    </Container>
  ) :(
    ('')
   )
);
        }
      }
export default Buy;

