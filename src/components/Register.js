import  {useCallback, useState} from 'react'
import UseForm from './UseForm';
import { useDispatch, useSelector } from 'react-redux';
import {talkingToCustomerDb, talkedToCustomerDb, talkingToCustomerDbFailed} from './../slice_reducers/customerSlice';
import API from './API';
import { Link } from 'react-router-dom';
import './../styles/login.css';
import {selectCart} from '../slice_reducers/cartSlice';
const axios = require('axios');
const bcrypt = require('bcryptjs');

const Register = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart)
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [values, handleChange] = UseForm({first_name:"", last_name:"", user_id:"", email:"", password:"", city:"", country:"", inputPasswordTwo:""});
    

    const addCustomerToDatabase = useCallback(({values}) => {
        dispatch(talkingToCustomerDb());
        //RL - why does State need to be used here? Answer- before talked to CustomerDb, after talking to CustomerDb, and failed??? 
        const {first_name, last_name, user_id, email, password, city, country, inputPasswordTwo} = values;
        const salt = bcrypt.genSaltSync(10);
        const saltyhash = bcrypt.hashSync(password, salt);
        
        const payload = {
        first_name: first_name,
        last_name: last_name,
        user_id: user_id,
        email: email,
        password: password,
        city: city, 
        country: country,
        inputPasswordTwo: inputPasswordTwo,

        
        
        }

        axios.post(API+"/users", (payload))
          .then(data=> {
        dispatch(talkedToCustomerDb(data.data))
        })
          .catch(() => { 
                dispatch(talkingToCustomerDbFailed())
            })},[dispatch])
    
      //axios is a promise-based system to do CRUD calls similar to Fetch API
      //It starts with an action, followed by a promise (.then), and then use .catch() for error handling

    const checkPasswordMatch = (e) => {
        e.preventDefault();
        const passwordOne = values.password;
        const passwordTwo = values.inputPasswordTwo;
    if (passwordOne === passwordTwo) {
        setPasswordMatch(true);
        addCustomerToDatabase({values}) 
    }

    }


    return (
        <div className='pageContainer'>
        {(!passwordMatch) ?         
            <div>
            <p className='boldOrange'>Please enter your registration details.</p><br/>
         <form>
            <div className="formfield">Email address: <input type="email" id="email" name="email" maxLength="50" value={values.email} onChange={handleChange} required/></div> <br/>
            <div className="formfield">Password: <input type="text" name="password" id="password" minLength="8" value={values.password} onChange={handleChange} required/></div><br/>
            <div className="formfield">Re-enter Password: <input type="text" name="inputPasswordTwo" id="inputPasswordTwo" minLength="8" value={values.inputPasswordTwo} onChange={handleChange} required/></div><br/>
            <div className="formfield">First Name: <input type="text" name='first_name' id="first_name" maxLength="20" value={values.first_name} onChange={handleChange} required/></div><br/>
            <div className="formfield">Last Name: <input type="text" name='last_name' maxLength="20" id="last_name" value={values.last_name} onChange={handleChange} required/></div><br/>
            <div className="formfield">User_id: <input type="text" name="user_id" maxLength="50" id="user_id" value={values.user_id} onChange={handleChange} required/></div><br/>
            <div className="formfield">Town/City: <input type="text" name="city" maxLength="20" id="city" value={values.city} onChange={handleChange} required/></div><br/>
            <div className="formfield">Country: <input type="text" name="country" maxLength="20" id="country" value={values.country} onChange={handleChange}/></div><br/>
            
 
            <button type="submit" id="submit" value="Register" onClick={checkPasswordMatch}>Register</button><br/>
        </form></div> : <div>
        <p>Welcome {values.first_name}!</p>
        <p>Thank you very much for registering with Sunshine Stores. </p>
        <div className='inlineFlex'>{ <Link to="/checkout"><button>Proceed to Checkout</button></Link>}
        <Link to="/"><button>Keep Shopping</button></Link></div>
        </div>}
        </div>
    )
}

export default Register;

//cart.isEmpty &&