import axios from "axios";
import React, { useEffect, useCallback, useMemo, useState } from "react";
import tw from "twin.macro";
import { useLocation, useParams } from 'react-router-dom';
import API from './API';
import './../styles/Buy.css';
import {Outlet, Link} from 'react-router-dom';

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;


const BuyIndex = function(){ 

  

  const {buy_offer_id} = useParams();
  //returns the location buy_offer_id value within the URL

  console.log(buy_offer_id);
  
   const[buyOffer, setBuyOffer] = useState([]); 

///////
   const fetchOffer = async() => {
    const response = await axios.get(API+ "/buy_offers").catch((err)=>console.log(err));

   if(response){    
   

    const offers = response.data;  

    //response.data is a MANDATORY line to include

    console.log("Buy Offers 555: ", response.data);
    console.log("Buy 777", offers);
    setBuyOffer(offers);      
     
           }

     //slug method below
      
      if(!response) {
        return <h2> Offer Not Found!</h2>;
      } 
      
    }

    const [buyUser, setBuyUser] = useState([]);
    const fetchUser = async() => {
      const response = await axios.get(API+ "/users").catch((err)=>console.log(err));

      if(response){

        const seller = response.data;

        console.log("The sellers are", seller);
      

        setBuyUser(seller);

        
      }
      if(!response){
        return <h2> Seller Not Found! </h2>
      }
    }

      //This 'slug' method of getting info from arrays above courtesy of Halliday on YT (Jordan shoes)
  

  useEffect(() => {
    fetchOffer();
    fetchUser();
  }, []); 

  console.log("Buy Offers 888: ", buyOffer);
  
  console.log("buyUser is", buyUser);

  var number = Number(buy_offer_id); 
 
  //Have to convert buy_offer_id to num in order to be recognized by filter/ find functions!!



  //There are muktiple buyOffers and sellers, so how does the program know which seller it is? Probably need to use Filtered item...


  //Therefore cannot get the ID of the seller yet here!

  const filteredItems = buyOffer.filter((item) => {
    return (item.buy_offer_id === number); 
  }
  );



  //this works
    
  const foundItem = buyOffer.find((item) => {
    return item.buy_offer_id === number; 
  }
  );

    //can't use foundItem; only filteredItems works!!!

  console.log('Filtered item is:',  filteredItems);

  const idOfSeller = String(filteredItems['user_id']);

  const buyOfferId = Number(filteredItems.buy_offer_id);

  console.log("The ID of the seller is:", idOfSeller);

  console.log("The ID of the buy_offer is:", buyOfferId);

  const filteredUser = buyUser.filter((seller) => {
    return(seller.user_id === idOfSeller);
  }
  );

  console.log('Filtered user is:',  filteredUser);

  console.log('Found item is:',  foundItem);


       

//This is so frustrating! I can't understand why any functions above the line from 'return' to get from the database come out UNDEFINED, but 
//but only work when under the return statement??? Tried Find, Map, Reduce, all types of variables, EVERYTHING!!!!
/// Found the reason why- Looking at dev tools- after the object name, there is an additional  0,1,2 title given to each 
// item that is not included in the SQL database! This needs to be referenced explicitly, or else 'undefined' will be returned!!

 return (

  <div>

  { Object.entries(filteredItems).map(([none, { price, industry, offer_details, offer_type, qualifications, user_id }]) =>
  <div>
    <div key ={buy_offer_id } className="offer" id='offer'>
 <Link to={`/Buy/${buy_offer_id}`}>
 <h2>You selected to purchase:  {buy_offer_id} </h2>
 </Link>

 <Link to= {{
               pathname: `/buy/BuyUserInfo/${buy_offer_id}`}}>
             
              <Button onClick={() => alert("Selecting: " + buy_offer_id)}> Click to see User's LinkedIn verified information
                </Button>
           </Link>


 <h2> Price:  {price} </h2>
 About this offer

 <h2> User id: {user_id} </h2>
 <h2> Offer details: {offer_details} </h2>
 <h2> Industry: {industry} </h2>
 <h2> Offer type: {offer_type} </h2>

 No refunds will be given.

 When you click accept, your NEO will go into Escrow for a period of 24 hours. After that period and you are satisfied with purchase, the escrow will automatically release to the seller. Disputes will not be handled by the exchange, so please be sure to clarify exact discussion points with the seller beforehand.

 About this seller

 <h2> Qualifications: {qualifications}  </h2>

 Linkedin: 

 <div>
</div>



 Send the seller a message:

 <div>
</div>

 <Link to= {{
               pathname: `/buy/escrow/${buy_offer_id}`}}>
             
              <Button onClick={() => alert("Selecting: " + buy_offer_id)}> Continue with purchase
                </Button>
           </Link>
             

</div>        

    )
    )
    </div>  
    

  
  ) 
  
  }
 
 {Object.entries(filteredUser).map(([none, {first_name, last_name, email, user_id, picture}]) =>
    <div>
    <div key ={user_id } className="user1" id='user1'>
    <Link to={`/Buy/${buy_offer_id}`}>
 <h2>You selected to purchase:  {buy_offer_id} </h2>
 </Link>
      <h2> First name of seller: {first_name} </h2> WTF??
      First name of seller:
      <h2> Last name of seller: {last_name} </h2>
      Last name of seller:
      <h2> Email of seller: {email} </h2>
      <h2> User ID of seller: {user_id} </h2>
      <Link to={`${picture}`}>
 <img src ={picture} />
 </Link>
      </div>
      </div>
   
    )}
<h1>WTF??</h1> WTF??
  </div>
 
 )

}        
        
        

         export default BuyIndex;
/* /* 

 </div>
         <ul>
         { Object.entries(buyOffer).map(([buy_offer_id, { price, industry, offer_details }]) => (
    <li key={buy_offer_id}>
        <Link to={`/Buy/${buy_offer_id}`}>
        <h2> {price} </h2>
        <h2> {industry} </h2>
        <h2> {filteredItems.offer_details} </h2>
        <h2>  </h2>
                
        </Link>
    </li>
            ))}
        
         </ul> */ 

         /* <ul>
         { Object.entries(buyOffer).filter(function(item){ 
           
           return item.buy_offer_id === {buy_offer_id};
          
          }).map(([buy_offer_id, { price, industry, offer_details }]) => (
  
        <Link to={`/Buy/${buy_offer_id}`}>
        <h2> {price} </h2>
        <h2> {industry} </h2>
        <h2>  </h2>
        <h2>  </h2>
                
        </Link>
    
            ))}
        
         </ul> */


//Below should work, but it doesn't!!!

       /*   <ul>
         { Object.entries(buyOffer).filter(item => item.buy_offer_id === "buy_offer_id").map(([buy_offer_id, { price, industry, offer_details }]) => (
       <li key={buy_offer_id}>
        <Link to={`/Buy/${buy_offer_id}`}>
        <h2> {price} </h2>
        <h2> {industry} </h2>
        <h2> {offer_details} </h2>
        <h2>  </h2>
                
        </Link>
       </li>
            ))}
        
         </ul>
        ) */


         //////////////////////////////////////////

