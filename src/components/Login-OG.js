import React from 'react';
////import './../styles/login.css';
import {useDispatch, useSelector} from 'react-redux';
import {talkingToCustomerDb, talkedToCustomerDb, talkingToCustomerDbFailed, selectCustomer} from '../slice_reducers/customerSlice';
import Products from '../components/Products';
import UseForm from './UseForm';
//import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import API from './API';
import {Link, useLocation} from 'react-router-dom';
import Checkout from '../components/Checkout';

import Logo from './../linkedin.png';

//const stripePromise = loadStripe('pk_test_51JCKsaGHGV93t4GrPTQd9yp3q1oMsZ9dbolIoS5OXQcO3u46Eh1pZatSFHH6iR7l6Gk6i4kiPLtenChOxBCVHYlK00V3I8acpe');

const axios = require('axios');


const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const fromCart = location.state?.fromCart;

    const customerState = useSelector(selectCustomer);
    const showLoggedInForm = customerState.isLoggedin;
    const failedToLogIn = customerState.isError;

    const [values, handleChange] = UseForm({user_id:"", password:""});


    const getCustomerDetails = (async (values) => {
            try {
            dispatch(talkingToCustomerDb)
            const {user_id, password} = values;
                
        const response = await axios.post(API+"/login", ({
            user_id: user_id, 
            password: password}))
            if (response.status === 201) { 
            dispatch(talkedToCustomerDb(response.data)) }
            else {
            dispatch(talkingToCustomerDbFailed(response.data))
            }
            values.user_id = "";
            values.password = "";
            
    }
        catch (error) {
        dispatch(talkingToCustomerDbFailed)
        };
});

    const login = (e) => {
        e.preventDefault()
        getCustomerDetails(values);
       }

    return (
        <div>
        {!showLoggedInForm && <div className="pageContainer" id='loginForm'>
        Please log in to your Sunshine Stores account.<br/>
        <form>
            Username: <input type="user_id" id="user_id" name="user_id" value={values.user_id} placeholder="" onChange={handleChange} required/> <br/>
            Password:&nbsp; <input type="text" id="password" name="password" value={values.password} placeholder="" onChange={handleChange} required/> 
            <button type="submit" value="Log in" onClick={login}>Log In</button><br/>
            
                To sign in just click the button below.<br></br>
            <a href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=868dd98yvyhfen&redirect_uri=http%3A%2F%2Flocalhost%3A3000
' >
<img className="linkedinIcon" src={Logo} alt="LinkedIn Logo"/> 
            </a>

            <form action="/login" method="get">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>
            
        </form>
        {failedToLogIn && <h4>Sorry! Your email or username is incorrect</h4>}<br/>
        <p>Or register as a new customer of Sunshine Stores.</p>  
        <Link to="/register" className='boldOrange'>Register as a New Customer</Link>
        </div>}
        {showLoggedInForm && !fromCart && <Products />}
        {showLoggedInForm && fromCart } 
       
        </div>
    )
}

export default Login

//  <Elements stripe={stripePromise}><Checkout /></Elements>}<Checkout />}