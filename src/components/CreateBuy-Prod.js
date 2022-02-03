import React, {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import './../styles/CreateBuy.css';
//const axios = require('axios');
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const CreateBuy = () => {
const [industry, setIndustry] = useState('');
const [offer_type, setOffer_type] = useState('');
const [offer_details, setOffer_details] = useState('');
const [price, setPrice] = useState('10');
const [user_id, setUser_id] = useState('');
const [headline, setHeadline] = useState('');
const [buy_offer_id, setBuy_offer_id] = useState('');
const [qualifications, setQualifications] = useState('');
//const [body, setBody] = useState('');
//const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
//const values = {industry, offer_type, offzer_details, price, qualifications, user_id, buy_offer_id};


   const handleSubmit = (e) => {
    e.preventDefault();
    const points = {industry, offer_type, offer_details, price, qualifications, user_id, buy_offer_id};
   
   fetch('process.env.DATABASE_URL', {
       method: 'POST',
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(points)
}).then(()=> {
    console.log('new offer added!');
})
   
   }
   const [value,setValue]=useState('');
   const handleSelect=(e)=>{
     console.log(e);
     setValue(e)
   }

           return (
        <div class='flex-container'>
        
            <div class = 'pageContainer'>
           <h2 class='Headline'> 
            CREATE AN OFFER TO BUY
           </h2>         
           <br></br>
         <form onSubmit={handleSubmit}>
            <div className="formfield">In what industry are you looking for data or research?: <input type="varchar" id="industry" name="industry" maxLength="50" value={industry} onChange={(e) => setIndustry(e.target.value)} required/></div> <br/>
            <div className="formfield">What type of product are you looking for?: <input type="varchar" name="offer_type" value={offer_type} onChange={(e) => setOffer_type(e.target.value)} required/></div><br/>
            
            {['end'].map((direction) => (
            <DropdownButton
      title="What type of product are you looking for?"
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
            
            <div className="formfield">Please provide details of what you are seeking: <input type="varchar" name="offer_details" value={offer_details} onChange={(e) => setOffer_details(e.target.value)} required/></div><br/>
            <div className="formfield">How much are you willing to pay for these products or services?: <input type="numeric" name='price' id="price" maxLength="20" value={price} onChange={(e) => setPrice(e.target.value)} required/></div><br/>
            <div className="formfield">What are the qualifications you require of the seller? (Please include number of years of experience, work with specific companies, knowledge of specific fields or industries, level of education, certifications, achievments, etc.): <input type="varchar" name='qualifications' maxLength="250" id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} required/></div><br/>
            <div className="formfield">Please write a brief headline for your proposal: <input type="varchar" name='headline' id="headline" maxLength="255" value={headline} onChange={(e) => setHeadline(e.target.value)} required/></div><br/>
            <div className="formfield">What is your user ID?: <input type="varchar" name='user_id' id="user_id" maxLength="255" value={user_id} onChange={(e) => setUser_id(e.target.value)} required/></div><br/>
            <div className="formfield">What is your buy offer ID?: <input type="varchar" name='buy_offer_id' id="buy_offer_id" maxLength="255" value={buy_offer_id} onChange={(e) => setBuy_offer_id(e.target.value)} required/></div><br/>

            <button type="submit" id="submit" value="CreateBuy" onSubmit={CreateBuy}>Create Buy</button><br/>
            </form>
      
        </div>
       
        </div>
        
           );
        }
    
    
        export default CreateBuy;