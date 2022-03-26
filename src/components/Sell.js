import tw from "twin.macro";
import './../styles/Sell.css';
import { useNavigate} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { Loader, ApolloTableQL } from 'react-tableql'
//Updated React Table to use this very helpful module! https://github.com/Danilo-Zekovic/react-tableql-example-app




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

function Sell ( props ) {

  const SellOffersQuery = gql`
     {
      sell_offers{   
        industry
        offer_type
        offer_details
        target_audience
        price
        qualifications
        region
        headline
        sell_offer_id
        user_id
        rate_type
      }
 
   }
` ;

let navigate = useNavigate();


function redirectTo(props) {
  navigate(`/sell/${props}`);
}

const onClick = (event) => {
  return event.sell_offer_id;
}

  const { loading, error, data } = useQuery( SellOffersQuery);  

  if(loading){
    return(<Container>
      <Loader />
      </Container>);
  }

  else{

  return (
    
    <Container>
      <h5>Consulting and Data Offers </h5>
     <ApolloTableQL
  query={SellOffersQuery}
  columns={['headline', 'industry','offer_type', 'price'  ]}
  sort
  onRowClick={data => redirectTo(data.sell_offer_id)} />
  
 
    </Container>
  )
        }
      }
export default Sell;

