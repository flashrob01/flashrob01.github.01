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
        return <h2> Not Found!</h2>;
      } 
      
    }

      //This 'slug' method of getting info from arrays above courtesy of Halliday on YT (Jordan shoes)
  

  useEffect(() => {
    fetchOffer();
   
  }, []); 

  console.log("Buy Offers 888: ", buyOffer);
  
  

  var number = Number(buy_offer_id);

  //Have to convert buy_offer_id to num in order to be recognized by filter/ find functions!!

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

  console.log('Filtered items are:',  filteredItems);

  

  console.log('Found item is:',  foundItem);

 console.log('the buyofferid is:', buy_offer_id);
       

//Old- This is so frustrating! I can't understand why any functions above the line from 'return' to get from the database come out UNDEFINED, but 
//but only work when under the return statement??? Tried Find, Map, Reduce, all types of variables, EVERYTHING!!!!
///
//

 return (

  <div>
Hello!!!

  { Object.entries(filteredItems).map(([none, { price, industry, offer_details, offer_type, qualifications }]) =>
  <div>
    <div key ={buy_offer_id } className="offer" id='offer'>
 <Link to={`/Buy/${buy_offer_id}`}>
 <h2>You selected to purchase:  {buy_offer_id} </h2>
 </Link>
 
 <h2> Price:  {price} </h2>
 About this offer

 
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

  
  ) }
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

