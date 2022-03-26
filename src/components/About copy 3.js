import './../styles/About.css'

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



//!! Above from: https://www.apollographql.com/docs/react/get-started/


const About = () => {

 const auth0 = createAuth0Client({
    domain: 'dev-7-8i89hb.us.auth0.com',
    client_id: 'stYoaCVnntvABpLxIxIdXnxX4riYXRnF'
  }).then(auth0Token => {
    console.log('this is auth0', auth0Token);
  });

  //Remember, a promise has to return something; in this case an object which we named 'auth0'
    

const onClick =  () => {

  auth0.loginWithRedirect({
   redirect_uri: 'http://localhost:3000'
 }).then(token => {
   //logged in. you can get the user profile like this:
   auth0.getUser().then(user => {
     console.log(user);
   });
 });
};
  

  
  /* function auth0(){
    return  createAuth0Client({
      domain: 'dev-7-8i89hb.us.auth0.com',
      client_id: 'stYoaCVnntvABpLxIxIdXnxX4riYXRnF'
    });
        
  }

    console.log('This is Access Token', accessToken); */

   

   /* getAccessToken(); */
/* 
   const onClick =  () => {

     auth0.loginWithRedirect({
      redirect_uri: 'http://localhost:3000/'
    }).then(token => {
      //logged in. you can get the user profile like this:
      auth0.getUser().then(user => {
        console.log(user);
      });
    });
  };
     */






/* const client = new ApolloClient({
 
  
  link: new HttpLink({
    uri: 'https://bright-mullet-79.hasura.app/v1/graphql',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret':  'T0UZGxeG1kpknf6t4hTrr5RKiaEMQUd5tCIhydl2Np8SJig9ReHwDP7mUyJqSgYn',
      'Authorization': 'Bearer' + accessToken
            
}
  }),
  cache: new InMemoryCache(),

  });

  client.query({
    query: gql`
    query MyQuery {
      price{
         
         headline
      }
      }
    `
  })
  .then(result => console.log('Here are buy_offers:', result));  




 const BUY_OFFERS = gql`
 
   query MyQuery {
     price{
        buy_offer_id
        headline
     }

  }

`; */

/* function BuyOffers(){
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
 */
 

 




  

    return (
      <div>
        <main>
        
      

       <div id= "mainContainer">

       <div class = 'pageContainer'>
       <h2 className= 'Headline'> About DDR         </h2>   
         
       <button onClick={onClick} id="onClick"> Click to Login with SPA-SDK </button>         
        
      
       
          
         
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
      </div>
          
      </main>
            </div>
    )
}

export default About

//    