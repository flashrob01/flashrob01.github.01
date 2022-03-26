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
        <div class='flex-container'>
        
            <div class = 'pageContainer'>
            <div class="flex-outer">

           <h2 class='Headline'> 
            CREATE AN OFFER TO SELL
           </h2>         
           <br></br>
         <form onSubmit={handleSubmit}>   
            <div className="formfield">What is your industry or sector of expertise?: <input type="string" id="industry" name="industry" size="30"  value={industry} onChange={(e) => setIndustry(e.target.value)} required/></div> <br/>
            
            {['end'].map((direction) => (
               <DropdownButton
         title="What type of product are you offering?"
         id="dropdown-menu-align-right"   
         onSelect={handleSelect}
         drop={direction}
         value={offer_type} onChange={(e) => setOffer_type(e.target.value)}
         >
               <Dropdown.Item eventKey="data">Dataset/ Report</Dropdown.Item>
               <Dropdown.Item eventKey="consulting- live discussion">One-on-One Consultation ( Phone/ videochat)</Dropdown.Item>
               
               <Dropdown.Divider />
               
         </DropdownButton>
            ))}
      <h4>{value}</h4>
            
            <div className="formfield">Please provide details of what you are providing: <textarea rows="3" cols="40" placeholder="Enter your message here" input class="string" className='largeformfield' name="offer_details" value={offer_details} size="50" onChange={(e) => setOffer_details(e.target.value)} /></div><br/>
            
            <div className="formfield"> What your relevant qualifications? (i.e. number of years of experience, work with specific companies or industry, knowledge of specific fields or industries, level of education, certifications, achievments, etc.): <textarea rows="3
            " cols="40" placeholder="Enter your message here" input class="string" className='largeformfield' name='qualifications' size="50"  maxLength="250" id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} /></div><br/>
            <div className="formfield"> Describe your target audience or market: <textarea rows="3" cols="40" placeholder="Enter your message here" input class="string"  name="target_audience" size="50" value={target_audience} onChange={(e) => setTarget_audience(e.target.value)} /></div><br/>

            <div className="formfield">What languages are you available to communicate in? <input type="varchar" name="languages" size="40" value={languages} onChange={(e) => setLanguage(e.target.value)} required/></div><br/>

            <div className="formfield">What is your current location or the location/region of your expertise?: <input type="varchar" name="region" size="40" value={region} onChange={(e) => setRegion(e.target.value)} required/></div><br/>
            <DropdownButton
        alignRight
        title="Are you charging based on a per hour or flat-rate basis?"
        drop="end"
        id="dropdown-menu-align-right2"
        onSelect={handleSelect2}
        value={rate_type} onChange={(e) => setRate_type(e.target.value2)}
        >
              <Dropdown.Item eventKey="flat rate">Flat rate</Dropdown.Item>
              <Dropdown.Item eventKey="per/hour">Per hour </Dropdown.Item>
        </DropdownButton>
          
            <div className="formfield">How much are you charging for your services or data?: <span class="prefix">$</span><input class="numeric" name='price' id="price" maxLength="20" size="30" value={price} onChange={(e) => setPrice(e.target.value)} /></div><br/>
            <div className="formfield">Please provide a headline summary of who you are and what you're offering (Less than 100 words) <textarea rows="3" cols="40" placeholder="Enter your message here" input class="string" name='headline' id="headline" maxLength="255" size="50" value={headline} onChange={(e) => setHeadline(e.target.value)}></textarea></div><br/>
           

            <button type="submit" id="submit" value="CreateSell" onSubmit={CreateSell}>Create Sell</button><br/>
            </form>
      
        </div>
               <div>
               {status === "error" ? (
                  <div>{console.log("An error occured")}</div>
                  
              ) : (
               <div>{console.log("Form submitted successfully")}</div>
              )}
              </div>
               </div>
       
        </div>
        
           );
        }

    
    
        export default CreateSell;
