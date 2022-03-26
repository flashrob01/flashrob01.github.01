import React, {useState} from 'react';
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import './../styles/CreateBuy.css';
//const axios = require('axios');
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { gql, useQuery, useMutation } from '@apollo/client';


const CreateTest = () => {
const [test, setTest] = useState('');
const [test2, setTest2] = useState('');
const [test3, setTest3] = useState('');



//const [body, setBody] = useState('');
//const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
//const values = {industry, offer_type, offzer_details, price, qualifications, user_id, buy_offer_id};


let input;



   const ADD_TEST_MUTATION = gql`
   mutation insert_tests($object: test_table_insert_input!) {
      insert_test_table_one(object: $object) {
        test3
        test2
        test
      }
    }
    
  `;

   const [value,setValue]=useState('');
const handleSelect=(e)=>{
  console.log(e);
  setValue(e)
}  


const [create_tests, {data, loading, error}] = useMutation(ADD_TEST_MUTATION, {
   variables: {
      object: {
        test: test, 
        test2: test2,
        test3: test3
      }
    }
});

if (loading) return 'Submitting...';
if (error) return `Submission error! ${error.message}`;




    const handleSubmit = (e) => {
    e.preventDefault();
    create_tests({test, test2, test3});   
   }
   


           return (
        <div class='flex-container'>
        
            <div class = 'pageContainer'>
           
           <h2 class='Headline'> 
            CREATE AN OFFER TO TEST
           </h2>         
           <br></br>
         <form onSubmit={handleSubmit}>
            <div className="formfield">TEST <input type="string" id="test" name="test" maxLength="50" value={test} onChange={(e) => setTest(e.target.value)} required/></div> <br/>
            
            
            
            <div className="formfield">TEST2 <input class="string" name='test2' value={test2} onChange={(e) => setTest2(e.target.value)} /></div><br/>
            <div className="formfield">TEST3?: <input class="numeric" name='test3' id="test3" maxLength="20" value={test3} onChange={(e) => setTest3(e.target.value)} /></div><br/>
           

            <button type="submit" id="submit" value="CreateTest" onSubmit={CreateTest}>Create Test</button><br/>
            </form>
      
        </div>
       
        </div>
        
           );
        }

    
    
        export default CreateTest;
