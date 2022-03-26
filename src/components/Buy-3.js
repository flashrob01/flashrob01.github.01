import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable, ReactTable } from "react-table";
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

function Buy () {

  const { loading, error, data } = useQuery( gql`
  query  {
      buy_offers{   
         industry
         price
      }
 
   }
`  )





const columns = [
      {
        Header: "user_id",
        accessor: "user_id",
      },
      {
        Header: "price",
        accessor: "price",
      },
      {
        Header: "headline",
        accessor: "headline",
      },
    ];

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      preGlobalFilteredRows,
      setGlobalFilter,
      state,
    } = useTable({columns, data})

      const isEven = (idx) => idx % 2 === 0;

      return (
        <div>
          <ReactTable>
                        data={data.buy_offers}
                        columns={columns}
                        defaultPageSize={10}
                    </ReactTable>
        </div>
      )
    }


export default Buy;

