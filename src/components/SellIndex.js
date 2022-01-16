import axios from "axios";
import React, { useEffect, useCallback, useMemo, useState } from "react";
import tw from "twin.macro";
import { useLocation, useParams } from 'react-router-dom';
import API from './API';
import './../styles/Buy.css';
import {Link} from 'react-router-dom';

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


const SellIndex = function(){ 

  

  const {sell_offer_id} = useParams();
  //returns the location buy_offer_id value within the URL

  console.log(sell_offer_id);
  
   const[sellOffer, setSellOffer] = useState([]); 

///////
   const fetchOffer = async() => {
    const response = await axios.get(API+ "/sell_offers").catch((err)=>console.log(err));

   if(response){    
   

    const offers = response.data;  

    //response.data is a MANDATORY line to include

    setSellOffer(offers);      
     
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

  console.log("Sell Offers 888: ", sellOffer);
  
  

  var number = Number(sell_offer_id);

  //Have to convert buy_offer_id to num in order to be recognized by filter/ find functions!!

  const filteredItems = sellOffer.filter((item) => {
    return (item.sell_offer_id === number); 
  }
  );

  //this works
    
  const foundItem = sellOffer.find((item) => {
    return item.sell_offer_id === number; 
  }
  );

    //can't use foundItem; only filteredItems works!!!

  console.log('Filtered items are:',  filteredItems);

  

  console.log('Found item is:',  foundItem);

 console.log('the sellofferid is:', sell_offer_id);
       

//Old- This is so frustrating! I can't understand why any functions above the line from 'return' to get from the database come out UNDEFINED, but 
//but only work when under the return statement??? Tried Find, Map, Reduce, all types of variables, EVERYTHING!!!!
///
//

 return (

      
  <div>

  { Object.entries(filteredItems).map(([none, { price, industry, offer_details, offer_type, qualifications }]) =>
  <div>
    <div key ={sell_offer_id } className="offer" id='offer'>
 <Link to={`/Sell/${sell_offer_id}`}>
 <h2>You selected to sell:  {sell_offer_id} </h2>
 </Link>
 
 <h2> Price:  {price} </h2>
 About this offer

 
 <h2> Offer details: {offer_details} </h2>
 <h2> Industry: {industry} </h2>
 <h2> Offer type: {offer_type} </h2>


 When you click accept- 

 About this buyer

 <h2> Qualifications: {qualifications}  </h2>

 Linkedin: 

 <div>
</div>

 Send the seller a message:

 <div>
</div>

 <Link to= {{
               pathname: `/sell/escrow/${sell_offer_id}`}}>
             
              <Button onClick={() => alert("Selecting: " + sell_offer_id)}> Continue with offer
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
        
        

         export default SellIndex;
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

