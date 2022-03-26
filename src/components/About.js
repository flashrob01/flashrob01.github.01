import './../styles/About.css'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

//!!
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} from "@apollo/client";

//!! Above from: https://www.apollographql.com/docs/react/get-started/

const client = new ApolloClient({
 
  
  link: new HttpLink({
    url: 'https://bright-mullet-79.hasura.app/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret':  'T0UZGxeG1kpknf6t4hTrr5RKiaEMQUd5tCIhydl2Np8SJig9ReHwDP7mUyJqSgYn',
          
}
  }),
  cache: new InMemoryCache(),

  });




 const BUY_OFFERS = gql`
 
   query MyQuery {
     price{
        buy_offer_id
        headline
     }

  }

`;

function BuyOffers(){
  const { loading, error, data } = useQuery(BUY_OFFERS);

  if(loading) return <p> Loading...</p>;
  if(error) return <p>Error :(</p>;

    return data.rates.map(({ buy_offer_id, industry}) => (
      <div key={buy_offer_id}>
        <p>
          {buy_offer_id}: {industry}
        </p>
      </div>
    ));
}

 client
  .query({
    query: gql`
    query MyQuery {
      price{
         buy_offer_id
         headline
      }
      }
    `
  })
  .then(result => console.log(result));  


//!!
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} from "@apollo/client";
import createAuth0Client from '@auth0/auth0-spa-js';

import { useAuth0 } from '@auth0/auth0-react'

import { useApi } from './use-api';


const axios = require("axios");







//!! Above from: https://www.apollographql.com/docs/react/get-started/


const About = () => {

  const {user} = useAuth0();


  

     return (
      <div>
        <main>
        
      

       <div id= "mainContainer">

       <div className = 'pageContainerAbout'>
       <h1 className= 'Headline'> About DDRC         </h1>   
   
       
         
       <div className='images'>
        <img src={require("../images/accenture_logo.jpg").default}  className='img1'/>
          <img src={require("../images/bain_logo.jpg").default}  className='img2'/>
          <img src={require("../images/aws_logo.jpg").default}  className='img3'/>
          <img src={require("../images/booz_logo.jpg").default}  className='img4'/>
          <img src={require("../images/GLG_logo.jpg").default}  className='img5'/>
          <img src={require("../images/Mckinsey_logo.jpg").default}  className='img6'/>
          </div>

      

         <br>
         </br>

         <div id="description"   >
          <p1>
            DDR (Decentralized Data and Research) is an exchange where professionals and organizations can find each other and pay for high-quality, customized, strategic, legally-gathered information directly, skipping the middleman, that is, the expensive research and consulting firm. 


          </p1>
          <p1>
          There are a number of people out there who have the skills and experiences to be paid consultants and researchers. Sometimes, it's just being in the right place at the right time. However, these precious assets really don't have a good platform to market their services. 
          </p1>

          <p1>
            DDR is therefore looking to capitalize on this market opportunity. The goal is to take power away from the prestigious research and consulting firms, who have fallen into groupthink in recent years, and put it back into the hands of the individual consultant and researcher. 


          </p1>
          </div>

          <div id= "accordionContainer">
          <div id='accordion'>
          <Accordion flush="true">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is the purpose behind DDRC?  </Accordion.Header>
    <Accordion.Body>
    Management consulting has gone from independent expert intelligence to ‘pre-paid talking points and narratives.’ DDRC seeks to restore Management consulting, data, and research to its roots by decentralizing the process using the blockchain.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What makes a good consultant?</Accordion.Header>
    <Accordion.Body>
    Generally speaking, the top-tier consulting firms tend to look for young, quick- thinking people who can speak well while delivering well- articulated talking points. Those interviewing with consulting firms spend hours going through case books, on how to prepare for a consulting interview. Therefore, they tend to appear polished. 
However, being a polished, quick-thinking, and capable speaker is not always what a buyer of information is looking for. At DDRC, we believe that many people possess some sort of special knowledge about a certain industry. For example, an expat living in XXX working in the XXX industry may, over the years, develop a very deep intelligence about a certain market. A retired industry salesperson would probably have deep knowledge of the markets that he used to sell into, that would be useful to the strategy and planning department of a company looking to enter that market. 
A vendor at a trade show could probably give useful business insights to those who did not attend the conference. Even someone closely monitoring a situation in a hard-to-access area (say a citizen in a war-torn country) could give insights to journalists or business people who don’t have access to those regions.
All of these people can actually make good management consultants, who can monetize their experience and time into a tangible product (i.e. actionable market intelligence) for the DDRC platform. 
We believe the market for untapped market intelligence is vast, and that our solution is optimal to realizing it. 

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How does DDRC work? </Accordion.Header>
    <Accordion.Body>
    Consultant lists his/ her specific deliverable on the site. 

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What makes a good consultant?</Accordion.Header>
    <Accordion.Body>
    Generally speaking, the top-tier consulting firms tend to look for young, quick- thinking people who can speak well while delivering well- articulated talking points. Those interviewing with consulting firms spend hours going through case books, on how to prepare for a consulting interview. Therefore, they tend to appear polished. 
However, being a polished, quick-thinking, and capable speaker is not always what a buyer of information is looking for. At DDRC, we believe that many people possess some sort of special knowledge about a certain industry. For example, an expat living in XXX working in the XXX industry may, over the years, develop a very deep intelligence about a certain market. A retired industry salesperson would probably have deep knowledge of the markets that he used to sell into, that would be useful to the strategy and planning department of a company looking to enter that market. 
A vendor at a trade show could probably give useful business insights to those who did not attend the conference. Even someone closely monitoring a situation in a hard-to-access area (say a citizen in a war-torn country) could give insights to journalists or business people who don’t have access to those regions.
All of these people can actually make good management consultants, who can monetize their experience and time into a tangible product (i.e. actionable market intelligence) for the DDRC platform. 
We believe the market for untapped market intelligence is vast, and that our solution is optimal to realizing it. 

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Why trust DDRC?</Accordion.Header>
    <Accordion.Body>
    All participants who use DDRC are required to verify through LinkedIn. 
The payment process is done through an escrow process using another member of the NEO community, Nekohit. Consultants can stake a percentage of funds to give comfort to the buyer that they have skin in the game as well. If the buyer is not satisfied, the consultant will not have access to the amount they staked. 


    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>How can you trust that the person on the other end is who they say they are?</Accordion.Header>
    <Accordion.Body>
    LinkedIn verification, reviews/ ratings, and pre-interview questions should help to decrease the risk of fraud or under-delivery. However, no solution is perfect, that’s why we also introduced the usage of the Nekohit platform.



    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>What are some best practices that should be exercised prior to initiating a transaction?</Accordion.Header>
    <Accordion.Body>
    Use the messaging feature to communicate extensively with the party beforehand. Ensure that you know what you are getting. Have detailed delivery points, as well as a specific list of questions. 
Send interview questions to the other party beforehand so you know their expertise.



    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      </div>
      </div>
   

      </div>
      </div>
          
      </main>
            </div>
    )
};

export default About;

//                   <button onClick={getAccessToken} id="getAccessToken"> Click to get Access Token </button>   
// 
//<button onClick={getBuyOffers} id="getBuyOffers"> Click to get Buy Offers </button>    

