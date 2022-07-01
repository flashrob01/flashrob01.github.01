import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

//import {MDBContainer} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container'
import {useState} from 'react'

/* import { useSelector, useDispatch} from 'react-redux';
import { emptyCartForSale, selectCart } from '../slice_reducers/cartSlice';
import { selectCustomer, loggedOutOfCustomerDb, talkingToCustomerDbFailed } from '../slice_reducers/customerSlice'; */
import API_Endpoint from '../config/server';
import './../styles/nav.css';




const axios = require('axios');

const Navigation = () => {

/*     const cart = useSelector(selectCart)
 */  //  const cartCounter = cart.data.length;
/*     const customerInfo = useSelector(selectCustomer);
    const loggedIndicator = customerInfo.isLoggedin; */

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





   /*  const dispatch = useDispatch();
    
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
    }; */
/*     
    const logout = (e) => {
      e.preventDefault()
      logoutOfDb()
    } */
    
//Noote: for onMouseLeave={onMouseLeave}; the first onMouseLeave is a pre-installed 'action', whereas the second is 
//a function as defined above and instantiated below!

    return (
      
<div>

  
  <Navbar id="Navbar">
    <Container>
    <Nav className="justify-content-end flex-grow-1 pe-3" justify="true" >
  
    
    
    <NavDropdown class="nav-link" id="nav-links" title="Buy" id="collasible-nav-dropdown">
        <NavDropdown.Item  id="nav-links" href="/Buy"> View research and consulting requests</NavDropdown.Item>
        <NavDropdown.Item  id="nav-links" href="/CreateBuy">Create a request </NavDropdown.Item>
       </NavDropdown>
      
       <NavDropdown class="nav-link" id="nav-links" title="Sell" id="collasible-nav-dropdown">
        <NavDropdown.Item  id="nav-links" href="/Sell">View research and consulting offers</NavDropdown.Item>
        <NavDropdown.Item  id="nav-links" href="/CreateSell">Create an offer</NavDropdown.Item>
       </NavDropdown>
     
      <Nav.Link  id="nav-links" href="/About">About</Nav.Link>

      <Nav.Link  id="nav-links" href="/Profile">My Profile</Nav.Link>

      <Nav.Link  class="nav-link" id="nav-links" href="/Blog">Blog</Nav.Link>

    </Nav>
    </Container>
  </Navbar>



</div>

    )
}

export default Navigation;

/* Black Navbar, no justified:
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="/home">Home</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
</Container>
</Navbar> */