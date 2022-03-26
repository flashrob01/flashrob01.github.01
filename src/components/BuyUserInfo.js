import axios from "axios";
import  { useEffect,  useState } from "react";
import {  useParams } from 'react-router-dom';
import API from './API';
import './../styles/BuyUserInfo.css';
import { Link} from 'react-router-dom';




const BuyUserInfo = function(){ 

  

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
  
  console.log("The sellers are2", buyUser);

  var number = Number(buy_offer_id); 
 
  //Have to convert buy_offer_id to num in order to be recognized by filter/ find functions!!



  //There are muktiple buyOffers and sellers, so how does the program know which seller it is? Probably need to use Filtered item...


  //Therefore cannot get the ID of the seller yet here!

  const filteredItems = buyOffer.filter((item) => {
    return (item.buy_offer_id === number); 
  }
  );



 
    
  const foundItem = buyOffer.find((item) => {
    return (item.buy_offer_id === number); 
  }
  );

    //Both filtered and foundItem work now, whereas before only filtered did!






  

  const buyOfferId = String(filteredItems['buy_offer_id']);

  console.log('Found item is:',  foundItem);

  console.log("The ID of the buy_offer is:", buyOfferId);

  console.log('Filtered item is:',  filteredItems);


                          let obj = filteredItems.find(o => o.buy_offer_id === 10);

                        console.log('This is using the array of objects method', obj);

   function getSeller(filteredItems) {

  
async function firstFilter(){

 await String(filteredItems['user_id']);

}

      firstFilter();
        

          let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 100)
    });
  
    promise.then((value) => {
      console.log(value);
    }); 
        
        const infoOfSeller =  filteredItems ['user_id'];
    
        
      
        return infoOfSeller;


  };

  


  let sellerId = String(getSeller(filteredItems));

  getSeller(filteredItems);

 

  

  console.log("The ID of the seller is:", getSeller(filteredItems));

  console.log("sellerId:", sellerId);

  console.log("The buyUser is:", buyUser);  

                        let obj2 = filteredItems.find(o => o.user_id === 10);

                        var result = filteredItems.map(function(a) {
                        
                          return String(a.user_id);
                                                                    });

                       //Note- xxx.map will return an array of objects! Need to check console so know what is being returned!
                                                                    
                        console.log('This is the array of buy users', buyUser); 


                        console.log('This is the user_id using the array of objects method aka result', result);

                      


   const filteredUser = buyUser.filter((seller) => {
    console.log("seller.user_id:", seller.user_id); 

    return(seller.user_id === result[0]);
    
  
  }
  ); 

  //This(result) is an array !!! so have to use result[0]!!! !!!!Spent 2 days on this!

  const foundUser = buyUser.find((seller1) => {
    return seller1.user_id === result; 
  }
  );

  

   console.log("The filteredUser is:", filteredUser); 
  
   console.log("The foundUser is:", foundUser); 

     
    
   let finalUser = buyUser.find(o => o.user_id === result);

   console.log('This is Final User using the array of objects method', finalUser); 

//This is so frustrating! I can't understand why any functions above the line from 'return' to get from the database come out UNDEFINED, but 
//but only work when under the return statement??? Tried Find, Map, Reduce, all types of variables, EVERYTHING!!!!
///
//

 return (

 
     
<div>
  { Object.entries(filteredItems).map(([none, { price, industry, offer_details, offer_type, headline, qualifications, user_id }]) =>
  
    <div key ={buy_offer_id } className="offer" id='offer'>
      <div class="wrapper">
    <div class="title">
  
      
 <Link to={`/Buy/${headline}`}>
 <h2>You selected to purchase:  {headline} </h2>
 </Link>
 
 
 </div>

 <div class="aboutOffer">
   <h2>
   About this offer
   </h2>
   <br>
   </br>
   Industry:{industry}
   <br>
   </br>
   Offer type:{offer_type}
   <br>
   </br>
   Offer details: {offer_details}
  <br>
  </br>
  No refunds given. 
   </div>

  
 
  




 


 


  <div class="aboutSeller">
 {Object.entries(filteredUser).map(([none, {first_name, last_name, email, user_id, qualifications, picture}]) =>
   
    <class key ={user_id } className="user1" id='user1'>
    
 <h2>About this seller   </h2>

 <img class="image" src={picture} />
      <h2> First name of seller: {first_name} </h2> 
      
      <h2> Last name of seller: {last_name} </h2>
    
      <h2> Email of seller: {email} </h2>
      <h2> User ID of seller: {user_id} </h2>
      Rating of seller:
      <h2> Picture: </h2>
      

      Linkedin:
      <h2> Qualifications: {qualifications} </h2>
  <br>
  </br>
  Full name and email address will be given upon full login 
   </class>
 )}
   </div>
     
   <div class="sendMessage">

 Send the seller a message:

</div>
</div>
</div>
  )}
</div>
 )
       
}
        
        

         export default BuyUserInfo;
