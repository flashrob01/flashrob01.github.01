import React, {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import {Link} from 'react-router-dom';
import './../styles/CreateSell.css';
//const axios = require('axios');
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { gql, useQuery, useMutation } from '@apollo/client';



const CreateSell = () => {
const [industry, setIndustry] = useState('');
const [offer_type, setOffer_type] = useState('');
const [rate_type, setRate_type] = useState('');
const [target_audience, setTarget_audience] = useState('');
const [offer_details, setOffer_details] = useState('');
const [price, setPrice] = useState('');
const [user_id, setUser_id] = useState('');
const [headline, setHeadline] = useState('');
const [sell_offer_id, setSell_offer_id] = useState('');
const [qualifications, setQualifications] = useState('');
const [status, setStatus] = useState("");

//const [body, setBody] = useState('');
//const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
//const values = {industry, offer_type, offer_details, price, qualifications, user_id, buy_offer_id};

let input;

   const ADD_SELL_OFFER = gql`
   mutation sell_offers($object: sell_offers_insert_input!) {
      insert_sell_offers_one(object:$object) {
        headline
        industry
        offer_details
        offer_type
        price
        qualifications
        rate_type
        target_audience
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
         sell_offer_id: sell_offer_id,
         target_audience: target_audience,
}}});

if (loading) return 'Submitting...';
if (error) {
   setStatus("error");

 return `Submission error! ${error.message}`;

}


   const handleSubmit = (e) => {
      e.preventDefault();
      create_sell_offers({industry, offer_type, offer_details, target_audience, price, headline, qualifications, user_id, sell_offer_id});
     }

           return (
        <div className='pageContainer'>
        {<div>
            <p className='boldOrange'>CREATE AN OFFER TO SELL.</p><br/>
         <form onSubmit={handleSubmit}>
           
         <DropdownButton
      alignRight
      title="What type of product are you offering?"
      drop="end"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
      value={offer_type} onChange={(e) => setOffer_type(e.target.value)}
        >
              <Dropdown.Item eventKey="data">Dataset/ Report</Dropdown.Item>
              <Dropdown.Item eventKey="consulting- live discussion">One-on-One Consultation </Dropdown.Item>
      </DropdownButton>
      <h4 className="result">{value}</h4>
            <div className="formfield">What industry is your data/services for? (i.e. internet, energy, healthcare, etc.): <input type="varchar" id="industry" name="industry" maxLength="150" value={industry} onChange={(e) => setIndustry(e.target.value)} required/></div> <br/>
            
            <div className="formfield">Please provide details of what you are offering: <input type="varchar" name="offer_details" value={offer_details} onChange={(e) => setOffer_details(e.target.value)} required/></div><br/>
            <div className="formfield">Describe your target audience or market: <input type="varchar" name="target_audience" value={target_audience} onChange={(e) => setTarget_audience(e.target.value)} required/></div><br/>
            <div className="formfield">XX set RATE <input type="varchar" name="rate_type" value={rate_type} onChange={(e) => setRate_type(e.target.value)} required/></div><br/>

                         

                     <div className="formfield">How much are you willing to sell these products or services for? (i.e. $100/hr. for video call, flat rate, etc.): <input type="varchar" name='price' id="price" maxLength="50" value={price} onChange={(e) => setPrice(e.target.value)} required/></div><br/>


            <div className="formfield">What are your relevant qualifications? (Please include number of years of experience, work with specific companies, knowledge of specific fields or industries, level of education, certifications, achievments, etc.): <input type="varchar" name='qualifications' maxLength="250" id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} required/></div><br/>
              <DropdownButton
        alignRight
        title="Are you charging based on a per hour or flat-rate basis?"
        drop="end"
        id="dropdown-menu-align-right2"
        onSelect={handleSelect2}
        value={rate_type} onChange={(e) => setRate_type(e.target.value2)}
        >
              <Dropdown.Item eventKey="flat rate">Flat Rate</Dropdown.Item>
              <Dropdown.Item eventKey="per/hour">Per Hour </Dropdown.Item>
        </DropdownButton>
        <h4 className="result">{value2}</h4> 
            <div className="formfield">Please provide a headline summary of who you are and what you're offering (Less than 100 words) <input type="varchar" name='headline' maxLength="200" id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} required/></div><br/>
           

            <button type="submit" id="submit" value="CreateSell" onSubmit={CreateSell}>Create Offer to Sell</button><br/>
            </form>
        <p>Welcome !</p>
       
        <div className='inlineFlex'>{ <Link to="/checkout"><button>Proceed to Checkout</button></Link>}
        <Link to="/"><button>Keep Shopping</button></Link></div>
        </div>}
        </div>
           );
        }
    
    
        export default CreateSell;

        //https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap

       