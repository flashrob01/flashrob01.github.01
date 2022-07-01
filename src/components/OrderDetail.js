import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import "./../styles/OrderDetail.css";

import Button from "react-bootstrap/Button";
import InputForm from "./InputForm";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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

let neoline;
let neolineN3;

/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, modules list, among other things.
 * It provides access to the first module of the track.
 */
const TrackDetail = () => {
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
    query GetSellOffers {
      sell_offers(where: { sell_offer_id: { _eq: "10" } }) {
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
    query GetUsers {
      users(where: { user_id: { _eq: "linkedin|uiWV-hd6Jm" } }) {
        user_id
        email
        picture
        first_name
        last_name
        linked_in
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_SELL_OFFERS_QUERY);

  /* useEffect(()=>{
  initDapi();
})
 */

  const [key, setKey] = useState("home");

  const [neoline, setNeoLine] = useState();
  const [neolineN3, setNeoLineN3] = useState();
  const [account, setAccount] = useState("");
  const [error2, setError2] = useState("");

  const {
    loading: user_loading,
    error: user_error,
    data: user_data,
  } = useQuery(GET_USERS);

  useEffect(() => {
    window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
      setNeoLine(new window.NEOLineN3.Init());
    });
    window.addEventListener("NEOLine.N3.EVENT.READY", () => {
      setNeoLineN3(new window.NEOLineN3.Init());
    });
  }, []);

  const initNeolineAccount = async () => {
    try {
      const { address } = await neoline.getAccount();
      setAccount(address);
    } catch (error2) {
      setError2("Neoline not ready");
      console.log(error2);
    }
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const values = Object.values(data);

  const filteredItems = values.filter((item) => {
    return item.sell_offer_id === "10";
  });

  if (user_loading) return "Loading...";
  if (user_error) return `Error! ${user_error.message}`;

  const users1 = Object.values(user_data);

  const filteredUsers = users1.filter((item) => {
    return item.user_id === "linkedin|uiWV-hd6Jm";
  });

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Pre-communication with the seller is very important prior to reserving a
      request with him or her!
    </Tooltip>
  );

  let linky = "https://" + user_data.users[0].linked_in;
  console.log("here is link", linky);

  return (
    <div className="grid">
      <div id="section1">
        <TrackDetails id="trackDetails">
          <h2>You selected to purchase: {data.sell_offers[0].headline} </h2>
          with
          <DetailRow id="DetailRow">
            <AuthorName id="AuthorName">
              {user_data.users[0].first_name} {user_data.users[0].last_name}
            </AuthorName>
          </DetailRow>
          <DetailRow id="DetailRow">
            <div id="viewCount">
              Offer Type: <h6> {data.sell_offers[0].offer_type} </h6>{" "}
            </div>
          </DetailRow>
          <DetailRow id="DetailRow">
            <div id="viewCount">
              Industry:<h6> {data.sell_offers[0].industry} </h6>{" "}
            </div>
          </DetailRow>
          <DetailRow id="DetailRow">
            <div id="viewCount">
              Region: <h3> {data.sell_offers[0].region} </h3>{" "}
            </div>
          </DetailRow>
          <DetailRow id="DetailRow">
            <div id="viewCount">
              {" "}
              <h6> Price: {data.sell_offers[0].price} </h6>{" "}
            </div>
          </DetailRow>
          <DetailRow id="DetailRow">
            {" "}
            <div id="viewCount">
              Rate type: <h3> {data.sell_offers[0].rate_type} </h3>{" "}
            </div>
          </DetailRow>
        </TrackDetails>
      </div>

      <div id="picture_area">
        <CoverImage id="coverImage" src={user_data.users[0].picture} alt="" />
      </div>

      <div id="section3">
        <h2>Please make an escrow payment to your DDR account now.</h2>
        <p>
          {" "}
          in NEO will be added to your NEO escrow account. The payment will stay
          in escrow for a period of 24 hours. During that time period, you and
          the seller to arrange to complete the terms of your transaction.
        </p>
        <div></div>
        If during this period, you and the seller decide to cancel the
        transaction, then you can mutually agree to cancel the transaction
        before the 24 hour period. Otherwise, the escrowed amount will
        automatically release to the seller.
        <p>
          Please be sure that you do not release the escrowed amount until after
          the transaction is performed. If there are any disputes, you may click
          the dispute button. Note that DDR is not responsible to enforce the
          quality or terms of the transaction, so please be sure to confirm
          these with the seller before you decide to enter into the transaction.
        </p>
        <h2>
          Once you've made the payment, be sure to click Paid within the given
          time limit. Otherwise, the trade will be automatically canceled and
          the NEO will be returned to your wallet.
        </h2>
      </div>

      <div id="section4">
        <StyledLink to={`/InputForm`}>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <button onClick={InputForm} color="pink" size="large">
              Click to here to send {user_data.users[0].first_name} a message
            </button>
          </OverlayTrigger>
          ,
        </StyledLink>

        {/* Note- the below Neoline initiation didn't work, likely cuz didn't use correct initiators?//

              <button
              onClick={NeolineConnect} 
                color='pink'
                size="large"
              >
                Click to here to make a payment with your Neoline wallet
              </button>  */}

        <div className="App">
          {neoline === undefined && <p>Loading neoline</p>}
          {neoline && (
            <button onClick={initNeolineAccount} color="pink" size="large">
              Click to here connect to neoline
            </button>
          )}
        </div>

        <StyledLink to={`www.linkedin.com`}>
          <button color="pink" size="large">
            Click to here to set up an escrow payment with Nekohit
          </button>
        </StyledLink>

        <Link
          to={{
            pathname: `/`,
          }}
        >
          <Button onClick={() => alert("Selecting: ")}> Cancel</Button>
        </Link>
      </div>
    </div>
  );
};

export default TrackDetail;

/** Track detail styled components */
const CoverImage = styled.img({
  objectFit: "cover",
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const TrackDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: "solid 1px silver",
  backgroundColor: "silver",
  h1: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: "black",
  },
});

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: "solid 1px silver",
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: "grey",
  alignSelf: "center",
});

const AuthorImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const AuthorName = styled.div({
  lineHeight: "1em",
  fontSize: "3em",
});

const IconAndLabel = styled.div({
  display: "flex",
  flex: "row",
  alignItems: "center",
  maxHeight: 20,
  width: "100%",
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  "#viewCount": {
    color: "black",
  },
});

const ModuleListContainer = styled.div({
  width: "100%",
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: "1em",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 2,
    },
  },
});

const ModuleLength = styled.div({
  marginLeft: 30,
  color: "grey",
});
