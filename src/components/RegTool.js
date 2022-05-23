import  {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import './../styles/CreateBuy.css';
//const axios = require('axios');
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'   
import { gql, useMutation } from '@apollo/client';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate} from 'react-router-dom';
import { urlencoded } from 'body-parser';


const RegTool = () => {
  const [yahoo1, setYahoo1] = useState('');
  const [yahoo2, setYahoo2] = useState('');
  const [yahoo3, setYahoo3] = useState('');
  const [startDate, setStartDate] = useState('');
  
/* const [user_id, setUser_id] = useState('');
 */

const { user} = useAuth0();
let navigate = useNavigate();

let attr1;

//const [body, setBody] = useState('');

//const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
//const values = {industry, offer_type, offzer_details, price, qualifications, user_id, buy_offer_id};










   const [value ,setValue]=useState('');
const handleSelect=(e)=>{
  console.log(e);
}

const [value2,setValue2]=useState('');
const handleSelect2=(e)=>{
  console.log(e);
}




function redirectTo(props) {
  navigate(`/${props}`);
}

const handleSubmit = (e) => {
  e.preventDefault();
 
  fetchData();
  console.log(fetchData());
 }
   
var url = new URL("http://127.0.0.1:5000/add");
   


function fetchData(){
  fetch('http://127.0.0.1:5000/add/yahoo1='+yahoo1).then((response)=>
  {return response;
  }
  
  )

 
}

           return (
            
            <div id="container_Buy">
               <h2 class='Headline'> 
               NEO Regression Tool
           </h2>         
           <br></br>
           <form onSubmit={handleSubmit}>   
              <ul class="flex-outer">
                <li>
                  <label for="first-name">List the first Yahoo stock symbol</label>
                  <input type="string" id="yahoo1" name="yahoo1"  value={yahoo1} onChange={(e) => setYahoo1(e.target.value)} required />
                </li>
                            
                <li>
                  <label for="offer_details">List the second Yahoo stock symbol</label>
                  <textarea rows="1"  placeholder="Enter your message here" input class="string" name="yahoo2" value={yahoo2} onChange={(e) => setYahoo2(e.target.value)} ></textarea>
                </li>  
                 <li>
                  <label for="qualifications">List the third Yahoo stock symbol </label>
                  <textarea rows="1"  input class="string"  name='yahoo3'  maxLength="400" id="yahoo3" value={yahoo3} onChange={(e) => setYahoo3(e.target.value)} ></textarea>
                </li>
                 <li>
                  <label for="languages">What is the date you want to search from?</label>
                  < input type="varchar" name="startDate"  value={startDate} placeholder="English" onChange={(e) => setStartDate(e.target.value)}  />
                </li>
               
              
                <li>
                  <button type="submit" id="submitMe">Submit</button>
                </li>
              </ul>
            </form>
          </div>
        
           );
        }

    
    
        export default RegTool;

