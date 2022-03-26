import React from 'react';
import styled from '@emotion/styled';
import { humanReadableTimeFromSeconds } from '../utils/helpers';
import { Link } from '@reach/router';
import ContentSection from './content-section';
import MarkDown from './md-content';
import { useQuery } from "@apollo/client";
import { gql} from '@apollo/client';
import './../styles/TrackDetail.css';


/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const TrackDetail = () => {
  

  const GET_BUY_OFFERS_QUERY = gql`
  query GetBuyOffers {
    buy_offers(where: {buy_offer_id: {_eq: "1"}}) {
      user_id
      price
      buy_offer_id
      industry
      offer_type
      headline
      offer_details
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
         }
  }
`;

const {loading, error, data } =  useQuery(GET_BUY_OFFERS_QUERY);

const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_USERS);

  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    

 const values = Object.values(data);

 const filteredItems = values.filter((item) => {
  return (item.buy_offer_id === '1'); 
}
);


if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;  

const users1 = Object.values(user_data);

const filteredUsers = users1.filter((item) => {
 return (item.user_id === 'linkedin|uiWV-hd6Jm'); 
}
);

  return (
    <ContentSection>
      <CoverImage id='coverImage' src={user_data.users[0].picture} alt="" />
      <TrackDetails>
        <DetailRow>
          <h1>{data.buy_offers[0].headline}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Track details</h4>
            <IconAndLabel>
             
              <div id="viewCount">{data.buy_offers[0].price} Price</div>
            </IconAndLabel>
            <IconAndLabel>
              <div id="viewCount">{data.buy_offers[0].buy_offer_id} Buy Offer ID</div>
            </IconAndLabel>
            <IconAndLabel>
              <div id="viewCount">{data.buy_offers[0].offer_type} Offer Type </div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Author</h4>
            <AuthorImage src={user_data.users[0].picture} />
            <AuthorName>{user_data.users[0].first_name}</AuthorName>
          </DetailItem>
          <div>
          <StyledLink to={`www.linkedin.com`}>
              <button
                color='pink'
                size="large"
              >
                Click to see LinkedIn Profile
              </button>
            </StyledLink>
           
          </div>
        </DetailRow>
        <ModuleListContainer>
         
        </ModuleListContainer>
      </TrackDetails>
      <MarkDown content={data.buy_offers[0].price} />
    </ContentSection>
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
  flexDirection: 'block',
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
  fontSize: '1em',
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
    color: 'pink',
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
