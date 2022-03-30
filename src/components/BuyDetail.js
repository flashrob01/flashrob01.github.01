import {useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import styled from '@emotion/styled';
import {Link, useParams} from 'react-router-dom';

import { useQuery } from "@apollo/client";
import { gql} from '@apollo/client';
import './../styles/BuyDetail.css';

import Button from 'react-bootstrap/Button';
import InputForm from './InputForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

 
const BuyDetail = () => {
  const { user} = useAuth0();
 
  

  const GET_BUY_OFFERS_QUERY = gql`
  query GetBuyOffers($buyOfferId: Int!){
    buy_offers(where: {buyOfferId: {_eq: $buyOfferId}}){
      user_id
      price
      buyOfferId
      industry
      offer_type
      headline
      offer_details
      languages
      rate_type
      qualifications
    }
  }
`;


const GET_USERS = gql`
  query GetUsers($userId: String){
    users(where: {user_id: {_eq: $userId}}){
      user_id
      email
      picture
      first_name
      last_name
      linked_in
      id
         }
  }
`;

const [visible, setVisible] = useState('false');

const {buyOfferId} = useParams();


var num = Number(buyOfferId);

const {loading, error, data } =  useQuery(GET_BUY_OFFERS_QUERY, {
  variables: {buyOfferId: num},
});

const userId = user.sub;

 
  const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_USERS, {
    variables: {userId},
    onCompleted: () => {
      setVisible('true');
    }
  }); 


  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    




if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;  



const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Pre-communication with the seller is very important prior to reserving a request with him or her!
  </Tooltip>
);


let linky = ("https://"+ user_data.users[0].linked_in);
console.log('here is link', linky);

let linky2= ('https://www.nekohit.com');


  return (
    (visible ==="true" && data) ? (
   <div className='grid'>
          <div id="banner_sellDetail">
        <h1 className='h1'>
            Begin your transaction now
        </h1>
    
                </div>
     <div id='section1_buyDetail'>
      <TrackDetails id='trackDetails_buyDetail'>
      
 <h2>Order Summary  </h2>
 You selected to sell: <DetailRow id='DetailRow'><b class="bold">  {data.buy_offers[0].headline} </b></DetailRow>
  
      <DetailRow id='DetailRow'>
      Buyer:  <b class="bold"> {user_data.users[0].first_name}  {user_data.users[0].last_name} </b> 
      </DetailRow>
      
      <DetailRow id='DetailRow'>
        Offer Type (data/ consulting): <b class="bold"> {data.buy_offers[0].offer_type}  </b> 
        </DetailRow> 

        <DetailRow id='DetailRow'>
        Industry:<b class="bold"> {data.buy_offers[0].industry} </b> 
        </DetailRow> 
        <DetailRow id='DetailRow'>            
            Region: <b class="bold"> {data.buy_offers[0].region} </b> 
            </DetailRow>

            <DetailRow id='DetailRow'>           
             
                Price: $<b class="bold"> {data.buy_offers[0].price} </b> 
              </DetailRow>
              <DetailRow id='DetailRow'>           Rate type (hourly/ flat rate): <b class="bold">  {data.buy_offers[0].rate_type} </b>  

              

              </DetailRow>
        
            </TrackDetails>

            </div>


                                      <div id='picture_area_buyDetail'>
                            <CoverImage id='coverImage_sellDetail' src={user_data.users[0].picture} alt="" />

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
                                                            Click to here to begin a conversation with {user_data.users[0].first_name} 
                                                        </button>
                                                        </OverlayTrigger>,

                                                        </StyledLink>
                                                    
                          </div>
     

            <div id="section3_buyDetail">
            <DetailRow id='DetailRow'>

                             
            <h2>Please set up your transaction using the Nekohit escrow system.</h2>
            </DetailRow>
            <DetailRow id='DetailRow'>

    <p>  As DDRC is not responsible to enforce the quality or terms of the transaction, it is important that you confirm the terms with the seller before you into the transaction. For more information on how escrow works, please see our FAQ  <StyledLink id="linky" to={`/About`}> here. </StyledLink>
             
    </p>
          </DetailRow>
    
  
      </div>
 

          <div id='section4_buyDetail'>         
          <DetailRow id='DetailRow'>



            <a href={linky2} target="_blank" rel="noopener noreferrer">
              <button
                color='pink'
                size="large"
              >
                Click to here to set up an escrow payment receipt with Nekohit now
                              </button>
            </a>
            </DetailRow>

          <DetailRow>
            <Link to= {{
               pathname: `/`}}>

                
             
              <Button > Go back
                </Button>
           </Link>
       </DetailRow>
       </div>    


      </div>
        ) :(
          ('')
         )
  );
};

export default BuyDetail;

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
