import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { selectCustomer } from "./slice_reducers/customerSlice";
import { useSelector } from "react-redux";
import ProtectedRoute from "./auth/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

//!!
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache

} from "@apollo/client";

//!! Above from: https://www.apollographql.com/docs/react/get-started/

  
  import {Auth0Provider} from "@auth0/auth0-react";




import "./styles/index.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Account from "./components/Account";
import Footer from "./components/Footer";
import FourOhFour from "./components/FourOhFour";
import Register from "./components/Register";
import ProductItem from "./components/ProductItem";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Buy from "./components/Buy";
import BuyIndex from "./components/BuyIndex";
import BuyEscrow from "./components/BuyEscrow";
import Sell from "./components/Sell";
import SellTerms from "./components/SellTerms";
import SellIndex from "./components/SellIndex";
import CreateBuy from "./components/CreateBuy";
import CreateSell from "./components/CreateSell";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
import AboutIndex from "./components/AboutIndex";
import ProfileCard from "./components/ProfileCard";
import BuyUserInfo from "./components/BuyUserInfo";
import Products from "./components/Products";
import Dudu from "./components/users";
import GetProfile from "./components/getProfile";
//PRofile above is for testing the use-api hook- https://github.com/auth0/auth0-react/blob/master/EXAMPLES.md#4-create-a-useapi-hook-for-accessing-protected-apis-with-an-access-token





const App = () => {


    const customerDetails = useSelector(selectCustomer);
    const customerLoggedIn = customerDetails.isLoggedin;

    return (
        <Router>
            
                <Header />
                <Navigation />
                
                 
                    <Routes>
                        <Route path="/" element ={<Home />} />
                        <Route path="/home" element ={<Home />} />
                        <Route path="/login/*" element={<Login />} />
                        <Route path="/logout/*" element={<Logout />} />
                        <Route path="/profile*" element={<ProtectedRoute><Profile /> </ProtectedRoute>} />
                        <Route path="productItem/:id" element={<ProductItem />} />
                        <Route path="register/*" element ={<Register />} />
                        <Route path="checkout/*" element = {<Checkout />} /> 
                        <Route path="/account" element = {<Account />} /> 
                        <Route path="/about" element = {<About />}  />  
                             <Route path="/about/:about_id" element = {<AboutIndex />} />
                             
                        <Route path="/buy" element = {<Buy />} /> 
                            <Route path="/buy/:buy_offer_id" element = {<BuyIndex />} />
                            <Route path="/buy/BuyUserInfo/:buy_offer_id" element = {<BuyUserInfo />} />
                            <Route path="/buy/:buy_offer_id/escrow" element = {<BuyEscrow />} />
                            
                            
                        <Route path="/sell" element = {<Sell />} />
                            <Route path="/sell/:sell_offer_id" element = {<SellIndex />}  />
                            <Route path="/sell/:sell_offer_id/escrow" element = {<SellTerms />} />
                            
                        <Route path="/CreateBuy" element = { <CreateBuy />} />
                        <Route path="/CreateSell" element = {<CreateSell />} />               
                        <Route path="/Loading" element = {<Loading />} />
                        <Route path="/ProfileCard" element = {<ProfileCard />} />
                        <Route path="/Products" element = {<Products />} />
                        <Route path="/Dudu" element = {<Dudu />} />
                        
                        <Route path="/getProfile" element = {<GetProfile />} />
                      
                     </Routes>
                    
                  
                   
                <Footer />
           
        </Router>
    );

// {customerLoggedIn ? <Account/> : <Navigate to='/' />}
//"Register", 404 and "accounts" have logic issues that need to be addressed
//    <Route path="/*" element = {<FourOhFour />} />       poopoo

};

export default App;


//note: Child elements uses < / Outlay> and requires rendering on same page as parent; if don't want this, don't use child!

// Below protected route for BuyIndex works...
{/* <Route path="/buy" element = {<Buy />} > </Route>
<Route path="/buy/:buy_offer_id" element = {<ProtectedRoute component = {BuyIndex} />} />
<Route path="/buy/escrow/:buy_offer_id" element = {<ProtectedRoute><BuyEscrow /></ProtectedRoute>} /> */}


{/* <Route path="/CreateBuy" element = {<ProtectedRoute component = {CreateBuy} />} />
<Route path="/CreateSell" element = {<ProtectedRoute><CreateSell /> </ProtectedRoute>}/>     */}