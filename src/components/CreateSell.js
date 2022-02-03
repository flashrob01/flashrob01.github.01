import React, {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import {Link} from 'react-router-dom';
import './../styles/About.css';
//const axios = require('axios');
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const CreateSell = () => {
const [industry, setIndustry] = useState('');
const [offer_type, setOffer_type] = useState('');
const [offer_details, setOffer_details] = useState('');
const [price, setPrice] = useState('10');
const [user_id, setUser_id] = useState('');
const [sell_offer_id, setSell_offer_id] = useState('');
const [qualifications, setQualifications] = useState('');
//const [body, setBody] = useState('');
//const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
//const values = {industry, offer_type, offer_details, price, qualifications, user_id, buy_offer_id};


   const handleSubmit = (e) => {
    e.preventDefault();
    const points = {industry, offer_type, offer_details, price, qualifications, user_id, sell_offer_id};
   
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
        <div className='pageContainer'>
        {<div>
            <p className='boldOrange'>CREATE AN OFFER TO SELL.</p><br/>
         <form onSubmit={handleSubmit}>
           
         <DropdownButton
      alignRight
      title="What type of product are you offering?"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
      value={offer_type} onChange={(e) => setOffer_type(e.target.value)}
        >
              <Dropdown.Item eventKey="data">Dataset/ Report</Dropdown.Item>
              <Dropdown.Item eventKey="consulting- live discussion">One-on-One Consultation ( Phone/ videochat)</Dropdown.Item>
            
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton>
      <h4>{value}</h4>
            <div className="formfield">What industry is your data/services for?: <input type="varchar" id="industry" name="industry" maxLength="50" value={industry} onChange={(e) => setIndustry(e.target.value)} required/></div> <br/>
            
            <div className="formfield">What type of product are you providing?: <input type="varchar" name="offer_type" value={offer_type} onChange={(e) => setOffer_type(e.target.value)} required/></div><br/>
            <div className="formfield">Please provide details of what you are offering: <input type="varchar" name="offer_details" value={offer_details} onChange={(e) => setOffer_details(e.target.value)} required/></div><br/>
            <div className="formfield">How much are you willing to sell these products or services for?: <input type="numeric" name='price' id="price" maxLength="20" value={price} onChange={(e) => setPrice(e.target.value)} required/></div><br/>
            <div className="formfield">What are the qualifications you require of the seller? (Please include number of years of experience, work with specific companies, knowledge of specific fields or industries, level of education, certifications, achievments, etc.): <input type="varchar" name='qualifications' maxLength="250" id="qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} required/></div><br/>
            <div className="formfield">What is your user ID?: <input type="varchar" name='user_id' id="user_id" maxLength="255" value={user_id} onChange={(e) => setUser_id(e.target.value)} required/></div><br/>
            <div className="formfield">What is your sell offer ID?: <input type="varchar" name='sell_offer_id' id="sell_offer_id" maxLength="255" value={sell_offer_id} onChange={(e) => setSell_offer_id(e.target.value)} required/></div><br/>
            
     

            <button type="submit" id="submit" value="CreateSell" onSubmit={CreateSell}>Create Sell</button><br/>
            </form>
        <p>Welcome !</p>
        <p>Thank you very much for registering with Sunshine Stores. </p>
        <div className='inlineFlex'>{ <Link to="/checkout"><button>Proceed to Checkout</button></Link>}
        <Link to="/"><button>Keep Shopping</button></Link></div>
        </div>}
        </div>
           );
        }
    
    
        export default CreateSell;

        //https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap
