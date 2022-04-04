import './../styles/Sell.css';
import { useNavigate} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container } from 'react-bootstrap';
import { Loader, ApolloTableQL } from 'react-tableql'
//Updated React Table to use this very helpful module! https://github.com/Danilo-Zekovic/react-tableql-example-app




//Note - all Buy table stuff is taken care of in this file, not buy.css! 


function Sell ( props ) {

  const SellOffersQuery = gql`
  query GetSellOffers @cached {
      sell_offers  {   
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

  const { loading, error, data } = useQuery( SellOffersQuery, {
    fetchPolicy: "cache-and-network"
  });  

  if(loading){
    return(<Container>
      <Loader />
      </Container>);
  }

  else{

  return (
    
    <Container>
      <h5>Research, Consulting and Data Offers </h5>
      <h2>Click for details</h2>
     <ApolloTableQL
  query={SellOffersQuery}
  columns={['headline', 'industry','offer_type'  ]}
  sort
  onRowClick={data => redirectTo(data.sell_offer_id)} />
  
 
    </Container>
  )
        }
      }
export default Sell;

