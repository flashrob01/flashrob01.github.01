import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "./globalFilter";
import API from './API';
import './../styles/Buy.css';
import {Link} from 'react-router-dom';


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

export function Buy(props){
  const [offers, setOffers] = useState([]);


  const fetchOffers = async () => {
    const response = await axios
      .get(API + '/buy_offers')
      .catch((err) => console.log(err));

    if (response) {
      const offers = response.data;  

      console.log("Buy Offers: ", offers);
      setOffers(offers);
    }
  };

  const data = useMemo(
    () => [
           
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Title",
        accessor: "title",
      },
    ],
    []
  );

  const offersData = useMemo(() => [...offers], [offers]);

  const offersColumns = useMemo(
    

    () =>
      offers[0]
        ? Object.keys(offers[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              if (key === "image")
                return {
                  Header: key,
                  accessor: key,
                  Cell: ({ value }) => <img src={value} />,
                  maxWidth: 70,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [offers]
  );

  const tableHooks = (hooks) => {
    /* Object.entries(this.response).map({})=>(
      <li key={buy_offer_id}>
        <Link to={`/buy/${row.values.buy_offer_id}`}>

        </Link>
      </li> */
    
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Select",
        Header: "Select",
        Cell: ({ row }) => (
        
             <Link to= {{
               pathname: `/buy/${row.values.buy_offer_id}`}}>
             
              <Button onClick={() => alert("Selecting: " + row.values.buy_offer_id)}> Select
                </Button>
           </Link>
             
        ),
      },
             //To note- data is a required option within React useTable.. or is it referring to data defined above?
             //Cell; row are options within React table
             //Above, it is saying, for every row, under this header, insert this button with this functionality?
    ]);
  }
  ;

  const tableInstance = useTable(
    {
      columns: offersColumns,
      data: offersData,
    },
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  useEffect(() => {
    fetchOffers();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <Table {...getTableProps()} >
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <TableRow
                {...row.getRowProps()}
                className={isEven(idx) ? "bg-green-400 bg-opacity-30" : ""}
              >
                {row.cells.map((cell, idx) => (
                  <TableData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableData>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
          
    </>
  
  );
    
        }

export default Buy

