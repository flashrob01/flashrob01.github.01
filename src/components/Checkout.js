import React, {useState} from 'react';
//import StripeCheckout from 'react-stripe-checkout';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {removeProductFromCart, selectCart } from "../slice_reducers/cartSlice";
import { selectCustomer } from "../slice_reducers/customerSlice";
import API_Endpoint from '../config/server';
import PublicStripeKey from '../config/stripe';
import Logo from './../logo.png'

import Shipping from './Shipping'
import GetTotal from './GetTotal';

import './../styles/checkout.css'

const axios = require('axios');

const Checkout = () => {
  
  const dispatch = useDispatch()
  const [paid, setPaid] = useState(false)


  const currency = 'GBP';
  const poundToPenny = (amount) => {
    return parseInt(amount * 100)
  }

  const deliveryCost = "2.50";
  const cartData = useSelector(selectCart);
  //const cart = cartData.data;
  const customer = useSelector(selectCustomer)
  const customerDetails = customer;
  const customer_id = customerDetails.customer_id;
  //const totalPrice = GetTotal(cart)
  let totalWithShipping = (parseFloat(deliveryCost)).toFixed(2);


const removeItem = (cartItem) => {
  dispatch(removeProductFromCart(cartItem));
    };


  const failedPayment = error => {
   throw error
  }

  const onToken = ((amount, description, e) => token => { 
      axios.post(`${API_Endpoint}/takepayment`, {
      description: 'Sunshine Stores products',
      source: token.id,
      currency,
      amount: poundToPenny(totalWithShipping), 
    }).then(
    oncePaid())
    .catch(failedPayment)
  }
    )

     
  const oncePaid = () => {
    const date = new Date()
    const payload = {
      total_spent: totalWithShipping,
      customer_id: customer_id,
      date_of_order: date,
      status: 'paid'
    }
    axios.post(`${API_Endpoint}/order`, (payload))
    .then(data=> {
      const length = 5
      let payload_orderlines;
  
      for (let i=0; i<length; i++) {
        payload_orderlines = {
           
            order_id: parseInt(data.data),
            
            quantity: 1,
            customer_id: customer_id
        }
        axios.post(`${API_Endpoint}/orderlines`, (payload_orderlines))
        
}        setPaid(!paid)
         })}


    return (
        <div className='pageContainer' id='checkoutContainer'>
                
                    {paid && <p className='boldOrange'>Thank you very much for your order.</p>}
                    {paid && <Link to='/account'><button>View Order History</button></Link>}
                    {!paid && <div className='columnflex' id='orderDetails'><h3>Order Summary</h3>
                          <p>The cost of the eco-items in your shopping basket is <span className='boldOrange'>£{5}</span>.</p>
                          <p>The delivery costs for shipping is <span className='boldOrange'>£{deliveryCost}</span>.</p>   
                          <p>The total cost is <span className='boldOrange'>£{totalWithShipping}</span>.</p>  
                    <div className="rowFlex">
                       
                      </div>
                      </div>}
                
                
         {!paid && <div>                 
         <h3>Payment Details</h3>
        <p>To pay for your eco-friendly Sunshine products please complete your payment details below:</p>
        <p>For testing purposes use this card number: <span className='boldOrange'>4242 4242 4242 4242</span> with any 3 digits for CVC and a future date.</p>
        
          <h3>Delivery</h3>
          <Shipping />
          </div>}
          </div>
    )
}

export default Checkout

{/* <StripeCheckout 
          name='Sunshine-Stores'
          image={Logo}
          description={`Sunshine Stores Eco-Products`}
         

          currency={currency}
          stripeKey={PublicStripeKey}
          zipCode={false}
          email={customerDetails.email}
          allowRememberMe={false}
          >
          <button className='btn'>Pay Now</button>
          </StripeCheckout> */}

// amount={poundToPenny(totalWithShipping)}
//token={onToken(poundToPenny(totalWithShipping), 'Eco-products')}
// {cart.map((cartItem) => (
//  <div key={cartItem.product_id} className="card" id='cartItem'>
                          
//  <img src={cartItem.image} alt={cartItem.name} />
//  <div className='columnflex'>
//  <p>price: £{cartItem.price}</p>
//  <button type="button" id='removeCheckout' onClick={() => {removeItem(cartItem);}}>Remove</button>
//  </div>
//  </div>                   
//))}