import axios from "axios";
import  { useEffect, useState } from "react";
/* import { useGlobalFilter, useSortBy, useTable } from "react-table"; */
import tw from "twin.macro";

import {  useParams } from 'react-router-dom';
import API from './API';
import './../styles/Buy.css';
import {Link} from 'react-router-dom';


const BuyEscrow = function(){ 



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

const {buy_offer_id} = useParams();
const[buyOffer, setBuyOffer] = useState([]);
const fetchOffer = async() => {
    const response = await axios.get(API+ "/buy_offers").catch((err)=>console.log(err));

   if(response){    
   

    const offers = response.data;  

       console.log("Buy Offers 555: ", response.data);
    console.log("Buy 777", offers);
    setBuyOffer(offers);      
     
           }
      
      if(!response) {
        return <h2> Not Found!</h2>;
      } 
      
    }

     useEffect(() => {
    fetchOffer();
   
  }, []); 

  console.log("Buy Offers 888: ", buyOffer);
  
    var number = Number(buy_offer_id);

  //Have to convert buy_offer_id to num in order to be recognized by filter/ find functions!!


return(
    <div>
    {Object.entries(filteredItems).map(([none, { price, industry, offer_details, offer_type, qualifications }]) =>
    <div key ={buy_offer_id } className="offer" id='offer'>
    <h2>Please make an escrow payment of ${price} to your DDR account now.</h2>
    <p> ${price} in NEO will be added to your NEO escrow account. The payment will stay in escrow for a period of 24 hours. During that time period, you and the seller to arrange to complete the terms of your transaction.
    </p>
    <div></div>
    If during this period, you and the seller decide to cancel the transaction, then you can mutually agree to cancel the transaction before the 24 hour period. Otherwise, the escrowed amount will automatically release to the seller.
    <p>
    Please be sure that you do not release the escrowed amount until after the transaction is performed. If there are any disputes, you may click the dispute button. Note that DDR is not responsible to enforce the quality or terms of the transaction, so please be sure to confirm these with the seller before you decide to enter into the transaction.
    </p>
    <h2>
    Once you've made the payment, be sure to click Paid within the given time limit. Otherwise, the trade will be automatically canceled and the NEO will be returned to your wallet.
     </h2>
    
     <Link to= {{
               pathname: `/`}}>
             
              <Button onClick={() => alert("Selecting: " )}> Continue with purchase
                </Button>
           </Link>

           <div></div>

           <Link to= {{
               pathname: `/`}}>
             
              <Button onClick={() => alert("Selecting: " )}> Cancel
                </Button>
           </Link>

    
    </div>
    
    )
    
     }
     </div>
)
    


}

export default BuyEscrow;