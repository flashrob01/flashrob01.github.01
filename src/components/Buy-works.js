import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "./globalFilter";
import API from './API';
import './../styles/Buy.css';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';




//Note - all Buy table stuff is taken care of in this file, not buy.css! 
const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
  


 
`;

const TableHead = tw.thead`
    
`;

const TableRow = tw.tr`
border
border-green-500
hover:bg-green-200
`;

const TableHeader = tw.th`
border
border-green-500
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

function Buy ({ onBuyOfferSelected }) {

  const BuyOffersQuery = gql`
     {
      buy_offers{   
         headline 
         industry
         price
         offer_type
         offer_details
         user_id
         buy_offer_id
      }
 
   }
` ;



  const { loading, error, data } = useQuery( BuyOffersQuery);  

  if(loading){
    return(<Container>
      <img src="https://media1.tenor.com/images/3f1d85ab9951d0db65e797c7f40e89cc/tenor.gif"></img>
      </Container>);
  }

  else{

  return (
    <Container>
      <table className="table table-striped" class="sortable">
        <thead>
          <tr>
            <th> buy_offer_id</th>
            <th> industry</th>
            <th> price</th>
            <th> Details</th>
            <th> user_id</th>
          </tr>
        </thead>
        <tbody>
          {data.buy_offers.map((buy_offer, i) => {
            return<tr key={i}>
              <td><a href={`/buy/${buy_offer.buy_offer_id}`} target="_blank" rel="noreferer">Select this item</a></td>
              <td>{buy_offer.headline}</td>
              <td>{buy_offer.industry}</td>
              <td>{buy_offer.price}</td>
              <td>{buy_offer.user_id}</td>
            </tr>
          })}
        </tbody>
      </table>
    </Container>
  )
        }
      }
export default Buy;

