import {useEffect, useContext, useState} from 'react';
import styled from '@emotion/styled';
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom';

import { useQuery } from "@apollo/client";
import { InMemoryCache, ApolloClient, gql} from '@apollo/client';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import  InputForm  from "./InputForm";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link, NavLink, useParams } from 'react-router-dom';
import './../styles/SellIndex.css';
/* import {client} from './../AuthorizedApolloProvider';
 */
import AuthorizedApolloProvider from '../AuthorizedApolloProvider';

import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

import { UNSAFE_NavigationContext } from "react-router-dom";


//NOTE- FOR SOME STRANGE REASON, SELLINDEX.JS IS STILL PULLING SOME CSS PROPERTIES FROM ORDERINDEX.JS; DUNNO WHY???
//REASON is because - never give a className "grid"... it confuses the JS!

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
//From the Odyssey lift-off-pt3 doc

/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const SellIndex = () => {
  const { user } = useAuth0();


  const GET_SELL_OFFERS_QUERY = gql`
  query GetSellOffers($sell_offer_id: Int!) @cached {
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

/* const GET_USERS = gql`
  query GetUsers($sell_offer_id: Int!){
    users(where: {sell_offers: {sell_offer_id: {_eq: $sell_offer_id}}}){
      user_id
      email
      picture
      first_name
      last_name
      linked_in
      
         }
  }
`; */

/*  const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache().restore(JSON.parse(window.__APOLLO_STATE__)),
  connectToDevTools: true,
  uri: `https://bright-mullet-79.hasura.app/v1/graphql/`,

});  */


const [key, setKey] = useState('home');

const {sell_offer_id} = useParams();

 const navigate = useNavigate();
 

var num = Number(sell_offer_id);


/* const useBackListener = (callback) => {
  const navigator = useContext(UNSAFE_NavigationContext).navigator;

  useBackListener(({ location }) =>
  console.log("Navigated Back", { location })
);


  useEffect(() => {
    const listener = ({ location, action }) => {
      console.log("listener", { location, action });
      if (action === "POP") {
        callback({ location, action });
        navigate(window.history.go(-1), { replace: true });

      }
    };

    const unlisten = navigator.listen(listener);
    return unlisten;
  }, [callback, navigator]);
}; */

const client = new ApolloClient({
  uri:'https://bright-mullet-79.hasura.app/v1/graphql/',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});


/* const {loading, error, data } =  useQuery(GET_SELL_OFFERS_QUERY); */

const {loading, error, data } =  useQuery(GET_SELL_OFFERS_QUERY, {
  fetchPolicy: "cache-and-network",
  variables: {sell_offer_id: num},
  onCompleted: () => {
    setVisible('true');
  }
});

/* const userId = user.sub; */

/* const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_USERS, {
   variables: {userId}, 
  variables: {sell_offer_id: num},
  onCompleted: () => {
    setVisible2('true');
  }
});
 */

const [visible, setVisible] = useState('false');
/* const [visible2, setVisible2] = useState('false'); */

if(loading) return 'Loading...';
if(error) return `Error! ${error.message}`;


/* 

if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;   */



/*  const values = Object.values(data); */



//-----------------caching------------------



 /*const cache = new InMemoryCache({
  typePolicies: {
    User: {
      // In an inventory management system, products might be identified
      // by their UPC.
      keyFields: ["user_id"],
    },
}});
 */

/* const imageRoute = new Route(({ request, sameOrigin }) => {
  return sameOrigin && request.destination === 'image'
}, new CacheFirst());

registerRoute(imageRoute); */

/* function redirectTo() {
  navigate(`"https://"+ data.users[0].linked_in`);
}

 const get_sell_offer = client.readQuery({
  query: GET_SELL_OFFERS_QUERY,
  variables: { // Provide any required variables here
    sell_offer_id: sell_offer_id,
    id: num,
    
  },
}); 
 */

//---caching to make pages load faster- from: https://www.apollographql.com/docs/react/caching/cache-configuration


let linky = ("https://"+ data.users[0].linked_in);
console.log('here is link', linky);

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Pre-communication with the seller is very important prior to reserving a request with him or her!
  </Tooltip>
);





  return (
    (/* visible ==="true"  &&  */data) ?  (
      <AuthorizedApolloProvider >
   <div className='grid2'>
      <div id="banner_sell">
        <h1 className='h1'>
            Connect with an Expert
        </h1>
    
                </div>
                                      <div id='picture_area_track'>
                            <CoverImage id='coverImage' src={data.users[0].picture} alt="" />
                            <DetailItem id="linkedinButton">

                        
                      <a href={linky} target="_blank"> 
 
                      <button
                        color='pink'
                        size="large"
                        
                      >
                        Click to see {data.users[0].first_name}'s LinkedIn Profile
                      </button>
                      </a>
                      </DetailItem>
                          </div>
      <TrackDetails id='trackDetails'>
      <CardContainer>
  <CardContent>

  <CardBody>
      <CardTitle>{data.users[0].first_name} {data.users[0].last_name}</CardTitle>
      <DetailRow>
      <div id='headline'>{data.sell_offers[0].headline}</div>
     </DetailRow>
     <DetailRow>
     <div id="viewCount">Industry: {data.sell_offers[0].industry}  </div>
     </DetailRow>
     <DetailRow>
     <div id="viewCount">Region:  {data.sell_offers[0].region}  </div>
     </DetailRow>
     <DetailRow>
     <div id="viewCount"> Target Audience:  {data.sell_offers[0].target_audience} </div>
     </DetailRow>
     <DetailRow>
     <div id="viewCount">Languages:  {data.sell_offers[0].languages}   </div>     </DetailRow>
      <CardFooter>
      
        
       
      </CardFooter>
     
    </CardBody>
  </CardContent>
</CardContainer>

     
            </TrackDetails>

            <div id="BottomDetail" >

                  <Tabs   id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}   transition={false}
className="mb-3" >
        <Tab eventKey="home" title="Details" id="tab1">
        <DetailRow>
        <div id="qualifications">Biography/Qualifications: {data.sell_offers[0].qualifications} </div>
        </DetailRow>
        <DetailRow>
         <div id="offer_details"> Offer Details: {data.sell_offers[0].offer_details}</div>
         </DetailRow>
        </Tab>
        <Tab eventKey="research" title="Research">
          <h3> Research and Media </h3>
        </Tab>
       
      </Tabs>
  
    
 

           
          <NavLink to="/InputForm">
            <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}>
              <button
                color='pink'
                size="large"
                id='buttonInput'
              >
                Click to here to send {data.users[0].first_name} a message
              </button>

              </OverlayTrigger>
              </NavLink>
        </div>

        <div className='box_track'>
          <div id="viewCount">Rate type: {data.sell_offers[0].rate_type} </div>

<div id="viewCount"> Price: {data.sell_offers[0].price} </div>
<div id="viewCount"> Offer Type: {data.sell_offers[0].offer_type}  </div>

<DetailRow id='DetailRow'></DetailRow>

<NavLink to={`/Sell/SellDetail/${data.sell_offers[0].sell_offer_id}`}>
              <button

                color='pink'
                size="large"
              >
                Click to here to talk to connect with {data.users[0].first_name}
              </button>
            </NavLink>

 <DetailRow id='DetailRow'></DetailRow>
 <br></br>

 <NavLink to={`/Sell`}>
              <button

                color='pink'
                size="large"
              >
                Click to return to sell list
              </button>
            </NavLink>

            

          </div>

      </div>
      </AuthorizedApolloProvider>
       ) :(
        ('')
       )
  );
};

export default SellIndex;



/** Track detail styled components */
const CardContainer = styled.div({
  borderRadius: 6,
  backgroundSize: 'cover',
  backgroundColor: 'silver',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
  },
  [mq[1]]: {
    width: '47%',
  },
  [mq[2]]: {
    width: '90%',
  },
/*   height: 750,
 */  
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  border: 'solid 1px grey',

  
  cursor: 'pointer',
  textDecoration: 'none',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  flex: 1,
});


const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'Row',
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
  /* border: 'solid 1px silver',
  backgroundColor: 'silver', */
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


