import React, {useState} from 'react';
import styled from '@emotion/styled';
import { humanReadableTimeFromSeconds } from '../utils/helpers';
import { Link } from '@reach/router';
import ContentSection from './content-section';
import MarkDown from './md-content';
import { useQuery } from "@apollo/client";
import { gql} from '@apollo/client';
import './../styles/TrackDetail.css';
import { stringifyForDisplay } from '@apollo/client/utilities';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { InputForm } from "./InputForm";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useLocation, useParams } from 'react-router-dom';


/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const TrackDetail = () => {
  

  const GET_SELL_OFFERS_QUERY = gql`
  query GetSellOffers {
    sell_offers(where: {sell_offer_id: {_eq: "10"}}) {
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
  }
`;

const GET_USERS = gql`
  query GetUsers{
    users(where: {user_id: {_eq: "linkedin|uiWV-hd6Jm"}}){
      user_id
      email
      picture
      first_name
      last_name
      linked_in
         }
  }
`;




const {loading, error, data } =  useQuery(GET_SELL_OFFERS_QUERY);

const [key, setKey] = useState('home');


const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_USERS);

const {sell_offer_id} = useParams();

var number = Number(sell_offer_id);

  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    

 const values = Object.values(data);

 const filteredItems = values.filter((item) => {
  return (item.sell_offer_id === number); 
}
);


if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;  

const users1 = Object.values(user_data);

const filteredUsers = users1.filter((item) => {
 return (item.user_id === 'linkedin|uiWV-hd6Jm'); 
}
);

let linky = ("https://"+ user_data.users[0].linked_in);
console.log('here is link', linky);

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Pre-communication with the seller is very important prior to reserving a request with him or her!
  </Tooltip>
);



  return (
   <div className='grid'>
      <div id="banner1">
        <h1 className='h1'>
            Connect with an Expert
        </h1>
    
                </div>
                                      <div id='picture_area_track'>
                            <CoverImage id='coverImage' src={user_data.users[0].picture} alt="" />
                            <DetailItem>

                      <a href={linky} target="_blank"> 

                      <button
                        color='pink'
                        size="large"
                      >
                        Click to see LinkedIn Profile
                      </button>
                      </a>
                      </DetailItem>
                          </div>
      <TrackDetails id='trackDetails'>
      <DetailRow id='DetailRow'>
            <AuthorName id='AuthorName' >{user_data.users[0].first_name} {user_data.users[0].last_name}</AuthorName>
      </DetailRow>
      <DetailRow id='DetailRow'>
             <div id='headline'>{data.sell_offers[0].headline}</div>
             </DetailRow>
        <DetailRow id='DetailRow'>
        <div id="viewCount">Industry:<h6> {data.sell_offers[0].industry} </h6> </div>
        </DetailRow> 
        <DetailRow id='DetailRow'>            
            <div id="viewCount">Region: <h3> {data.sell_offers[0].region} </h3> </div>
            </DetailRow>

            <DetailRow id='DetailRow'>           
             
              <div id="viewCount"> Target Audience: <h6> {data.sell_offers[0].target_audience} </h6> </div>
              </DetailRow>
              <DetailRow id='DetailRow'>              <div id="viewCount">Languages: <h3> {data.sell_offers[0].languages} </h3>  </div>

              

              </DetailRow>
        
            </TrackDetails>

            <div id="BottomDetail">

                  <Tabs   id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}   transition={false}
className="mb-3">
        <Tab eventKey="home" title="Details" id="tab1">
        <div id="qualifications">Qualifications: {data.sell_offers[0].qualifications} </div>

         <div id="offer_details"> Offer Details: {data.sell_offers[0].offer_details}</div>
        </Tab>
        <Tab eventKey="research" title="research">
          <h3> Research and Media </h3>
        </Tab>
       
      </Tabs>
  
    
 

           

            <StyledLink to={`www.linkedin.com`}>
            <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}>
              <button
                color='pink'
                size="large"
                
              >


  
                Click to here to send {user_data.users[0].first_name} a message
              </button>

              </OverlayTrigger>,
            </StyledLink>
        </div>

        <div className='box_track'>
          <div id="viewCount">Rate type: {data.sell_offers[0].rate_type} </div>

<div id="viewCount"> Price: {data.sell_offers[0].price} </div>
<div id="viewCount"> Offer Type: {data.sell_offers[0].offer_type}  </div>

<DetailRow id='DetailRow'></DetailRow>

<StyledLink to={`www.linkedin.com`}>
              <button
                color='pink'
                size="large"
              >
                Click to here to continue order
              </button>
            </StyledLink>


          </div>

      </div>
  );
};

export default TrackDetail;

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
  borderBottom: 'solid 1px silver',
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
