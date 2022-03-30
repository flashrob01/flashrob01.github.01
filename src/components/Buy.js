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

import tw from "twin.macro";


const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
`;

const TableRow = tw.tr`
border
border-yellow-300
hover:bg-yellow-300
`;

const TableHeader = tw.th`
border
border-yellow-300
p-2
`;

const TableBody = tw.tbody`
`;

//TableData is where the borders of the table are set!
const TableData = tw.td`
border-0

p-5
`;

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





function Buy ( props ) {



  const BuyOffersQuery = gql`
     {
      buy_offers{   
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
  });  

  if(loading){
    return(<Container>
      <Loader />
      </Container>);
  }

  else{

  return (
    <Container>
     <ApolloTableQL
  query={BuyOffersQuery}
  columns={['headline', 'industry',  'offer_type']}
  sort
  onRowClick={data => redirectTo(data.buyOfferId)} 
  id='ApolloTable'

  />
  
 
    </Container>
  )
        }
      }
export default Buy;

