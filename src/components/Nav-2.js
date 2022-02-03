import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux';
import { emptyCartForSale, selectCart } from '../slice_reducers/cartSlice';
import { selectCustomer, loggedOutOfCustomerDb, talkingToCustomerDbFailed } from '../slice_reducers/customerSlice';
import API_Endpoint from '../config/server';
import './../styles/nav.css';
import DropdownBuy from './DropdownBuy';
import DropdownSell from './DropdownSell';

import AuthNav from './auth-nav';



const axios = require('axios');

const Nav = () => {

    const cart = useSelector(selectCart)
  //  const cartCounter = cart.data.length;
    const customerInfo = useSelector(selectCustomer);
    const loggedIndicator = customerInfo.isLoggedin;

    const[click, setClick] = useState(false);
    const[dropdownbuy, setDropdownBuy] = useState(false);
    const[dropdownsell, setDropdownSell] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);

    const onMouseEnter = () => {
      if(window.innerWidth < 960) {
        setDropdownBuy(false);
        } else {
          setDropdownBuy(true);
        }
    }

    const onMouseLeave = () => {
      if(window.innerWidth < 960) {
        setDropdownBuy(false);
        } else {
          setDropdownBuy(false);
        }
    };

    
    const onMouseEnter_2 = () => {
      if(window.innerWidth < 960) {
        setDropdownSell(false);
        } else {
          setDropdownSell(true);
        }
    }

    const onMouseLeave_2 = () => {
      if(window.innerWidth < 960) {
        setDropdownSell(false);
        } else {
          setDropdownSell(false);
        }
    };





    const dispatch = useDispatch();
    
    const logoutOfDb = async() => { 
      try {
      const response = await axios.get(`${API_Endpoint}/logout`)
      if (response.status === 200) {
      dispatch(loggedOutOfCustomerDb(response.data)) 
      dispatch(emptyCartForSale())   
    }}
      catch (error) {
      dispatch(talkingToCustomerDbFailed)
    };
    };
    
    const logout = (e) => {
      e.preventDefault()
      logoutOfDb()
    }
    
//Noote: for onMouseLeave={onMouseLeave}; the first onMouseLeave is a pre-installed 'action', whereas the second is 
//a function as defined above and instantiated below!

    return (
        <div>
        <nav>
              <Link to="/home">Home</Link>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              
                <li 
                  className='nav-item'
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                                  <Link 
                  to='/buy'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  >
                    <li className='fas fa-caret-down' />Buy
                    </Link>
                    {dropdownbuy && <DropdownBuy />}
                    </li>
                 
                  </ul>

                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               
                <li 
                  className='nav-item'
                  onMouseEnter={onMouseEnter_2}
                  onMouseLeave={onMouseLeave_2}
                >
                  <Link 
                  to='/sell'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  >
                    <li className='fas fa-caret-down' />Sell
                    </Link>
                    {dropdownsell && <DropdownSell />}
                    </li>
                 
                  </ul>

                  

              <div id='about'><Link to="/about">About Us</Link></div>

              <AuthNav />

              
              
              
    
              <div id='profile'><Link to="/profile"> My Profile </Link></div>
       </nav>
        </div>
    )
}

export default Nav;

//{!loggedIndicator && <Link to={{pathname:'/login', state: {fromCart: false}}}><p>Log In / Register</p></Link>}
//{loggedIndicator &&  <div id='hiAndLogout'><Link to="/account">{customerInfo.data.first_name}'s account </Link><button onClick={logout}>Logout</button></div>}