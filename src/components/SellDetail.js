import {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import styled from '@emotion/styled';
import {Link, useParams} from 'react-router-dom';

import { useQuery } from "@apollo/client";
import { gql} from '@apollo/client';
import './../styles/SellDetail.css';

import Button from 'react-bootstrap/Button';
import InputForm from './InputForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const SellDetail = () => {
  const { user} = useAuth0();


  

  const GET_SELL_OFFERS_QUERY = gql`
  query GetSellOffers($sell_offer_id: Int!) {
    sell_offers(where: {sell_offer_id: {_eq: $sell_offer_id}}) {
      user_id
      price
      sell_offer_id
      industry
      offer_type
      headline
      offer_details
      languages
      rate_type
      target_audience
      region
      qualifications
    }
    users(where: {sell_offers: {sell_offer_id: {_eq: $sell_offer_id}}}) {
      email
      first_name
      picture
      email
      last_name
      
    }
  }
`;




const [visible, setVisible] = useState('false');

const {sell_offer_id} = useParams();


var num = Number(sell_offer_id);

const {loading, error, data } =  useQuery(GET_SELL_OFFERS_QUERY, {
  variables: {sell_offer_id: num},
  onCompleted: () => {
    setVisible('true');
  }
});

const userId = user.sub;






  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    


const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Pre-communication with the seller is very important prior to reserving a request with him or her!
  </Tooltip>
);


let linky = ("https://"+ data.users[0].linked_in);
console.log('here is link', linky);

let linky2= ('https://www.nekohit.com');


  return (
    (visible ==="true" && data) ? (
   <div className='grid'>
          <div id="banner_sellDetail">
        <h1 className='h1'>
            Complete your order
        </h1>
    
                </div>
     <div id='section1_sellDetail'>
      <TrackDetails id='trackDetails_sellDetail'>
      
 <h2>Order Summary  </h2>
 You selected to purchase: <DetailRow id='DetailRow'><b class="bold">  {data.sell_offers[0].headline} </b></DetailRow>
  
      <DetailRow id='DetailRow'>
      Offeror:  <b class="bold"> {data.users[0].first_name}  {data.users[0].last_name} </b> 
      </DetailRow>
      
      <DetailRow id='DetailRow'>
        Offer Type: <b class="bold"> {data.sell_offers[0].offer_type}  </b> 
        </DetailRow> 

        <DetailRow id='DetailRow'>
        Industry:<b class="bold"> {data.sell_offers[0].industry} </b> 
        </DetailRow> 
        <DetailRow id='DetailRow'>            
            Region: <b class="bold"> {data.sell_offers[0].region} </b> 
            </DetailRow>

            <DetailRow id='DetailRow'>           
             
                Price: $<b class="bold"> {data.sell_offers[0].price} </b> 
              </DetailRow>
              <DetailRow id='DetailRow'>           Rate type: <b class="bold">  {data.sell_offers[0].rate_type} </b>  

              

              </DetailRow>
        
            </TrackDetails>

            </div>


                                      <div id='picture_area_sellDetail'>
                            <CoverImage id='coverImage_sellDetail' src={data.users[0].picture} alt="" />

                                                        <StyledLink to={`/InputForm`}>

                                                        <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip}
                                                        >
                                                        <button

                                                            color='pink'
                                                            size="large"
                                                        >
                                                            Click to here to begin a conversation with {data.users[0].first_name} 
                                                        </button>
                                                        </OverlayTrigger>,

                                                        </StyledLink>
                                                    
                          </div>
     

            <div id="section3_sellDetail">

                             
            <h2>Please set up your transaction using the Nekohit escrow system.</h2>
    <p>  As DDRC is not responsible to enforce the quality or terms of the transaction, it is important that you confirm the terms with the seller before you into the transaction. For more information on how escrow works, please see our FAQ  <StyledLink id="linky" to={`/About`}> here. </StyledLink>
    </p>
   
    
  
      </div>
 

          <div id='section4_sellDetail'> 

           

{/* Note- the below Neoline initiation didn't work, likely cuz didn't use correct initiators?//

              <button
              onClick={NeolineConnect} 
                color='pink'
                size="large"
              >
                Click to here to make a payment with your Neoline wallet
              </button>  */}

{/* Turned off Neoline button, because it's tacky and confusing and not going to be used anyway
 */}              {/* <div className="App">
      {neoline === undefined && <p>Loading neoline</p>}
      {neoline && (
        <button onClick={initNeolineAccount} color="pink" size="large">
          Click to here connect to neoline
        </button>
      )}
    </div> */}

            <a href={linky2} target="_blank" rel="noopener noreferrer">
              <button
                color='pink'
                size="large"
              >
                Click to here to set up an escrow payment with Nekohit
                              </button>
            </a>

            <Link to= {{
               pathname: `/sell/:sell_offer_id`}}>

                 <br></br>
             
              <Button onClick={() => alert("Selecting: " )}> Go back
                </Button>
           </Link>
        </div>

        

      </div>
        ) :(
          ('')
         )
  );
};

export default SellDetail;

/** Track detail styled components */
const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
});

const TrackDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: 'solid 1px silver',
  backgroundColor: 'silver',
  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  h4: {
    fontSize: '1.2em',
    marginBottom: 5,
    color: 'black',
  },
});

const DetailRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: 'solid 1px lightgrey',
});

const DetailItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'grey',
  alignSelf: 'center',
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const AuthorName = styled.div({
  lineHeight: '1em',
  fontSize: '3em',
});

const IconAndLabel = styled.div({
  display: 'flex',
  flex: 'row',
  alignItems: 'center',
  maxHeight: 20,
  width: '100%',
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  '#viewCount': {
    color: 'black',
  },
});

const ModuleListContainer = styled.div({
  width: '100%',
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 2,
    },
  },
});

const ModuleLength = styled.div({
  marginLeft: 30,
  color: 'grey',
});
