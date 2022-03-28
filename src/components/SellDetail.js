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


/* import {
  NeoLineAccount,
  NeoLineInit,
  NeoLineInterface,
  NeoLineN3Init,
  NeoLineN3Interface,
  NeoLineNetworks,
  NeoLineReadInvocationResult,
  NeoLineSignMessageInvocationResult,
  NeoLineWriteInvocationResult,
} from './utils/neoline'; */




/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const TrackDetail = () => {
  const { user} = useAuth0();

/* 
    let neolineN3 = new window.NEOLineN3.Init();

    let hoho = function(){
    neolineN3.getAccount();
    } */

  /* function initDapi() {
    neoline.getAccount()
    .then(account => {
        const {
            address,
            label
        } = account;
    
        console.log('Provider address: ' + address);
        console.log('Provider account label (Optional): ' + label);
    })
    .catch((error) => {
        const {type, description, data} = error;
        switch(type) {
            case 'NO_PROVIDER':
                console.log('No provider available.');
                break;
            case 'CONNECTION_DENIED':
                console.log('The user rejected the request to connect with your dApp');
                break;
            case 'CHAIN_NOT_MATCH':
                console.log('The currently opened chain does not match the type of the call chain, please switch the chain.');
                break;
            default:
                // Not an expected error object.  Just write the error to the console.
                console.error(error);
                break;
        }
    });
  }; */
  

  const GET_SELL_OFFERS_QUERY = gql`
  query GetSellOffers($sell_offer_id: Int!){
    sell_offers(where: {sell_offer_id: {_eq: $sell_offer_id}}){
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

const {sell_offer_id} = useParams();


var num = Number(sell_offer_id);

const {loading, error, data } =  useQuery(GET_SELL_OFFERS_QUERY, {
  variables: {sell_offer_id: num},
});

const userId = user.sub;


/* useEffect(()=>{
  initDapi();
})
 */


/* 
const [key, setKey] = useState('home'); */

/* const [neoline, setNeoLine] = useState();
  const [neolineN3, setNeoLineN3] = useState();
  const [account, setAccount] = useState("");
  const [error2, setError2] = useState(""); */

  const {loading:user_loading, error:user_error, data:user_data } =  useQuery(GET_USERS, {
    variables: {userId},
    onCompleted: () => {
      setVisible('true');
    }
  });/* 
useEffect(() => {
  window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
    setNeoLine(new window.NEOLineN3.Init());
  });
  window.addEventListener("NEOLine.N3.EVENT.READY", () => {
    setNeoLineN3(new window.NEOLineN3.Init());
  });
}, []); */

/* const initNeolineAccount = async () => {
  try {
    const { address } = await neoline.getAccount();
    setAccount(address);
  } catch (error2) {
    setError2("Neoline not ready");
    console.log(error2);
  }
};
 */


  if(loading) return 'Loading...';
 if(error) return `Error! ${error.message}`;    

 const values = Object.values(data);

 const filteredItems = values.filter((item) => {
  return (item.sell_offer_id === num); 
}
);


if(user_loading) return 'Loading...';
if(user_error) return `Error! ${user_error.message}`;  

const users1 = Object.values(user_data);

const filteredUsers = users1.filter((item) => {
 return (item.user_id === 'linkedin|uiWV-hd6Jm'); 
}
);

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Pre-communication with the seller is very important prior to reserving a request with him or her!
  </Tooltip>
);


let linky = ("https://"+ user_data.users[0].linked_in);
console.log('here is link', linky);




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
      Offeror:  <b class="bold"> {user_data.users[0].first_name}  {user_data.users[0].last_name} </b> 
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
     

            <div id="section3_sellDetail">

                             
            <h2>Please make an escrow payment to your DDR account now.</h2>
    <p>  As DDRC is not responsible to enforce the quality or terms of the transaction, it is important that you confirm these terms with the seller before you decide to enter into the transaction.DDRC recommends that transaction between parties be performed using the Nekohit escrow system. For more information on how it works, see our FAQ  <StyledLink id="linky" to={`/About`}> here </StyledLink>. 
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

            <StyledLink to={`www.nekohit.com`}>
              <button
                color='pink'
                size="large"
              >
                Click to here to set up an escrow payment with Nekohit
                              </button>
            </StyledLink>

            <Link to= {{
               pathname: `/Sell`}}>

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
  borderBottom: 'solid 1px grey',
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
