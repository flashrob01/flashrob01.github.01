import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./auth/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

//--https://auth0.com/blog/complete-guide-to-react-user-authentication/

/* import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
 *///This is not logging me in; only providing credentials?

/* import { ApolloProvider } from '@apollo/client';
 *///import { useAppApolloClient } from "./config/apolloClient";
//{ApolloProvider} and useAppApolloClient comes from https://medium.com/ovrsea/token-authentication-with-react-and-apollo-client-a-detailed-example-a3cc23760e9

//--


//!!
/* import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache

} from "@apollo/client"; */

//!! Above from: https://www.apollographql.com/docs/react/get-started/

  




import "./styles/index.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import FourOhFour from "./components/FourOhFour";
import About from "./components/About";
import Buy from "./components/Buy";
import BuyIndex from "./components/BuyIndex";
import BuyDetail from "./components/BuyDetail";
import Sell from "./components/Sell";
import SellDetail from "./components/SellDetail";
import SellIndex from "./components/SellIndex";
import CreateBuy from "./components/CreateBuy";
import CreateSell from "./components/CreateSell";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
import ProfileCard from "./components/ProfileCard";
//PRofile above is for testing the use-api hook- https://github.com/auth0/auth0-react/blob/master/EXAMPLES.md#4-create-a-useapi-hook-for-accessing-protected-apis-with-an-access-token
//import GetProfile3 from "./components/getProfile3";
//import GetProfile3 from "./components/GetProfile3";
//import useAccessToken from "./components/useAccessToken";

import OrderDetail from "./components/OrderDetail";
import InputForm from "./components/InputForm";
import EditSellOffer from './components/EditSellOffer';
import EditBuyOffer from './components/EditBuyOffer';
import Posts from './components/Posts';
import Post from './components/Post';
import FullPost from "./components/FullPost";
import Blog from './components/Blog';
/* import RegTool from './components/RegTool';
 */



const App = () => {

 //   const apolloClient = useAppApolloClient();

/*     const customerDetails = useSelector(selectCustomer);
    const customerLoggedIn = customerDetails.isLoggedin; */

    return (
        <Router>
             
             
                <Header />
                <Navigation />
                
                 
                    <Routes>
                        <Route path="/" element ={<Home />} />
                        <Route path="/home" element ={<Home />} />
                        <Route path="/login/*" element={<Login />} />
                        <Route path="/logout/*" element={<Logout />} />
                        <Route path="/profile/*" element={<ProtectedRoute component = {Profile} />} />
                        <Route path="/about" element = {<About />}  />  
                             
                        <Route path="/buy" element = {<Buy />} /> 
                            <Route path="/buy/:buyOfferId" element = {<ProtectedRoute component ={BuyIndex} />} />
                            <Route path="/buy/BuyDetail/:buyOfferId" element = {<ProtectedRoute component = {BuyDetail} />} />                            
                            
                        <Route path="/sell" element = {<Sell />} />
                            <Route path="/sell/:sell_offer_id" element = {<ProtectedRoute component ={SellIndex} />}  />
                            <Route path="/sell/SellDetail/:sell_offer_id" element = {<ProtectedRoute component={SellDetail} />} />
                            
                        <Route path="/CreateBuy" element = {<ProtectedRoute component = {CreateBuy} />} />
                        <Route path="/CreateSell" element = {<ProtectedRoute component = {CreateSell} />} />
                        <Route path="/Loading" element = {<Loading />} />
                        <Route path="/ProfileCard" element = {<ProfileCard />} />
               
                        <Route path="/OrderDetail" element = {<OrderDetail />} />  
                        <Route path="/InputForm" element = {<ProtectedRoute component = {InputForm} />} />  
                        <Route path="/EditSellOffer/:sell_offer_id" element = {<ProtectedRoute component = {EditSellOffer}/>} />  
                        <Route path="/EditBuyOffer/:buyOfferId" element = {<ProtectedRoute component = {EditBuyOffer}/>} />  
                        <Route path="/Posts" element = {<Posts />}  /> 
                        <Route path="/Post" element = {<Post />}  /> 
                        <Route path="/FullPost" element = {<FullPost />}  /> 
                        <Route path="/Blog" element = {<Blog />}  /> 
{/*                         <Route path="/RegTool" element = {<RegTool />}  /> 
 */}

                       

                      
                     </Routes>
                    
                  
                   
                <Footer />
   
                
        </Router>
    );

// {customerLoggedIn ? <Account/> : <Navigate to='/' />}
//"Register", 404 and "accounts" have logic issues that need to be addressed
//    <Route path="/*" element = {<FourOhFour />} />       poopoo

};

export default App;

//--Temporarily move Auth0Provider WithHistory here until figure out issue! (just below router)
//--</Auth0ProviderWithHistory>
// <Auth0ProviderWithHistory>

//<Route path="/GetProfile3" element = {<GetProfile3 />} />
//  <Route path="/useAccessToken" element = {<useAccessToken />} />                       
//  //            </ApolloProvider>
// <ApolloProvider client={apolloClient}>

//note: Child elements uses < / Outlay> and requires rendering on same page as parent; if don't want this, don't use child!

// Below protected route for BuyIndex works...
{/* <Route path="/buy" element = {<Buy />} > </Route>
<Route path="/buy/:buy_offer_id" element = {<ProtectedRoute component = {BuyIndex} />} />
<Route path="/buy/escrow/:buy_offer_id" element = {<ProtectedRoute><BuyEscrow /></ProtectedRoute>} /> */}


//<Route path="/CreateSell" element = {<ProtectedRoute><CreateSell /> </ProtectedRoute>}/>     */}