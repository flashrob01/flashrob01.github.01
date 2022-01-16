import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { selectCustomer } from "./slice_reducers/customerSlice";
import { useSelector } from "react-redux";
import ProtectedRoute from "./auth/ProtectedRoute";



import "./styles/index.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
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




const App = () => {

    console.log('If you can read this, glory be to God!!!! Du duuuuu!!!')

    const customerDetails = useSelector(selectCustomer);
    const customerLoggedIn = customerDetails.isLoggedin;

    return (
        <Router>
            <div id ="mainContainer">
                <Header />
                <Nav />
                <div className = "innerContainer">
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
                        <Route path="/about" element = {<About />} />    
                        <Route path="/buy" element = {<Buy />} >
                            <Route path="/buy/:buy_offer_id" element = {<ProtectedRoute component = {BuyIndex} />} />
                            <Route path="/buy/escrow/:buy_offer_id" element = {<ProtectedRoute><BuyEscrow /></ProtectedRoute>} />
                        </Route>
                        <Route path="/sell" element = {<Sell />} >
                            <Route path="/sell/:sell_offer_id" element = {<SellIndex />} />
                            <Route path="/sell/escrow/:sell_offer_id" element = {<SellTerms />} />
                        </Route>
                        <Route path="/CreateBuy" element = {<ProtectedRoute component = {CreateBuy} />} />
                        <Route path="/CreateSell" element = {<ProtectedRoute><CreateSell /> </ProtectedRoute>}/>               
                        <Route path="/Loading" element = {<Loading />} />
                        
                      
                     </Routes>
                 </div>
                <Footer />
            </div>
        </Router>
    );

// {customerLoggedIn ? <Account/> : <Navigate to='/' />}
//"Register", 404 and "accounts" have logic issues that need to be addressed
//    <Route path="/*" element = {<FourOhFour />} />       poopoo

};

export default App;


//note: Child elements uses < / Outlay> and requires rendering on same page as parent; if don't want this, don't use child!

