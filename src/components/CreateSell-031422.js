import React, {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import './../styles/CreateSell.css';
//const axios = require('axios');
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { gql, useQuery, useMutation } from '@apollo/client';
import Alert from 'react-bootstrap/Alert';


const CreateSell = () => {
const [industry, setIndustry] = useState('');
const [offer_type, setOffer_type] = useState('');
const [offer_details, setOffer_details] = useState('');
const [price, setPrice] = useState('');
const [headline, setHeadline] = useState('');
const [qualifications, setQualifications] = useState('');
const [rate_type, setRate_type] = useState('');
const [target_audience, setTarget_audience] = useState('');
const [region, setRegion] = useState('');
const [languages, setLanguage] = useState('');




const [status, setStatus] = useState("");



//const [body, setBody] = useState('');

//const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
//const values = {industry, offer_type, offzer_details, price, qualifications, user_id, buy_offer_id};


let input;




   const ADD_SELL_OFFER = gql`
   mutation sell_offers($object: sell_offers_insert_input!) {
      insert_sell_offers_one(object:$object) {
        industry
        offer_type
        offer_details
        target_audience
        price
        qualifications
        headline
        sell_offer_id
        user_id
         rate_type
         target_audience
         region
         languages
      }
    }
    
`;

   const [value,setValue]=useState('');
const handleSelect=(e)=>{
  console.log(e);
  setValue(e)
}

const [value2,setValue2]=useState('');
const handleSelect2=(e)=>{
  console.log(e);
  setValue2(e)
}


const [create_sell_offers, {data, loading, error}] = useMutation(ADD_SELL_OFFER, {
   variables: {
      object: {
         industry: industry,
         offer_type: offer_type,
         offer_details: offer_details,
         price: price,
         qualifications: qualifications,
         headline: headline,
         rate_type: rate_type,
         target_audience: target_audience,
         region: region,
         languages: languages

}}});

if (loading) return 'Submitting...';
if (error) {
   setStatus("error");

 return `Submission error! ${error.message}`;

}



    const handleSubmit = (e) => {
    e.preventDefault();
    create_sell_offers({industry, offer_type, offer_details, price, qualifications, headline, rate_type, target_audience, region, languages});
 
   }

   
   
/*    addBuy({variables:{industry: input.value, offer_type: input.value, 
      offer_details: input.value, price: input.value, qualifications: input.value, 
      user_id: input.value, buy_offer_id:input.value }}) */

 

           return (
            
            <div class="container-Sell">
               <h2 class='Headline'> 
            List your services
           </h2>         
           <br></br>
           <form onSubmit={handleSubmit}>   
              <ul class="flex-outer">
                <li>
                  <label for="first-name">What is your industry or sector of expertise?</label>
                  <input type="string" id="industry" name="industry"  value={industry} onChange={(e) => setIndustry(e.target.value)} required />
                </li>
                <li>
                  <p>Are you providing live consulting, data, or both?
                  </p>
                  <ul class="flex-inner">
                    <li>
                      <input type="radio" name="radio1" value="consulting" required/>
                      <label for="consulting" eventKey="consulting"  value={offer_type} onChange={(e) => setOffer_type(e.target.value)}>consulting</label>
                    </li>
                    <li>
                      <input type="radio" name="radio1" value="data" />
                      <label for="data" eventKey="data"  value={offer_type} onChange={(e) => setOffer_type(e.target.value)}>data</label>
                    </li>
                    <li>
                      <input type="radio" name="radio1" value="both" />
                      <label for="both" eventKey="both"  value={offer_type} onChange={(e) => setOffer_type(e.target.value)}>both</label>
                    </li>
                  </ul>
                  </li>
                <li>
                  <label for="offer_details">Please provide details of what you are providing:</label>
                  <textarea rows="6"  placeholder="Enter your message here" input class="string" name="offer_details" value={offer_details} onChange={(e) => setOffer_details(e.target.value)} required></textarea>
                </li>  
                 <li>
                  <label for="qualifications">What your relevant qualifications?: </label>
                  <textarea rows="6"  input class="string"  name='qualifications'  maxLength="250" id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} placeholder="(i.e. number of years of experience, work with specific companies or industry, knowledge of specific fields or industries, level of education, certifications, achievments, etc.)" required></textarea>
                </li>
                <li>
                  <label for="target_audience">Describe your target audience or market:</label>
                  <textarea rows="6"  input class="string"  name="target_audience"  value={target_audience} onChange={(e) => setTarget_audience(e.target.value)} placeholder="Enter your message here" required></textarea>
                </li>  
                <li>
                  <label for="languages">What languages are you available to communicate in?</label>
                  < input type="varchar" name="languages"  value={languages} onChange={(e) => setLanguage(e.target.value)} required />
                </li>
                <li>
                  <label for="region">What is your current location or the location/region of your expertise?:</label>
                  <input type="varchar" name="region"  value={region} onChange={(e) => setRegion(e.target.value)} required/>
                </li>
                <li>
                <label for="rate_type">Are you charging on a flat-rate or a per-hour basis?</label>
                  
                  <ul class="flex-inner">
                    <li>
                      <input type="radio" name="radio2" value="flat-rate" />
                      <label for="flat-rate" eventKey="flat-rate"  value={rate_type} onChange={(e) => setRate_type(e.target.value)} required>flat-rate</label>
                    </li>
                    <li>
                      <input type="radio" name="radio2" value="per-hour" />
                      <label for="per-hour" eventKey="per-hour" value={rate_type} onChange={(e) => setRate_type(e.target.value)}>per-hour</label>
                    </li>
                    <li>
                      <input type="radio" name="radio2" value="hybrid/ negotiable" />
                      <label for="hybrid/ negotiable" eventKey="hybrid/ negotiable" value={rate_type} onChange={(e) => setRate_type(e.target.value)}>hybrid/ negotiable</label>
                    </li>
                  </ul>
                  </li>
                <li>
                  <label for="phone">How much are you charging for your services or data?</label>
                  <input class="varchar" name='price' id="price" maxLength="50"  value={price} onChange={(e) => setPrice(e.target.value)} placeholder="$" required />
                </li>
                <li>
                  <label for="headline">Please provide a headline summary of who you are and what you're offering (Less than 100 words) </label>
                  <textarea rows="6" input class="string" name='headline' id="headline" maxLength="255" value={headline} onChange={(e) => setHeadline(e.target.value)} required></textarea>
                </li>  
              
                <li>
                  <button type="submit">Submit</button>
                </li>
              </ul>
            </form>
          </div>
        
           );
        }

    
    
        export default CreateSell;
