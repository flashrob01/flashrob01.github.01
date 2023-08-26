import { useState } from "react";
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import "./../styles/CreateBuy.css";
//const axios = require('axios');
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { gql, useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const CreateBuy = () => {
  const [industry, setIndustry] = useState("");
  const [offer_type, setOffer_type] = useState("");
  const [offer_details, setOffer_details] = useState("");
  const [rate_type, setRate_type] = useState("");
  const [languages, setLanguages] = useState("");
  const [price, setPrice] = useState("");
  const [headline, setHeadline] = useState("");
  const [qualifications, setQualifications] = useState("");

  const [status, setStatus] = useState("");
  /* const [user_id, setUser_id] = useState('');
   */

  const { user } = useAuth0();
  let navigate = useNavigate();

  const user_id = user.sub;

  //const [body, setBody] = useState('');

  //const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
  //const values = {industry, offer_type, offzer_details, price, qualifications, user_id, buy_offer_id};

  /* const GET_SELL_OFFERS_QUERY = gql`
    query GetSellOffers {
      sell_offers(where: { sell_offer_id: { _eq: "10" } }) {
        user_id
        price
        sell_offer_id
        industry
        offer_type
        headline
        offer_details
        languages
        qualifications
        rate_type
      }
    }
  `; */

  const ADD_BUY_OFFER = gql`
    mutation buy_offers($object: buy_offers_insert_input!) {
      insert_buy_offers_one(object: $object) {
        industry
        offer_type
        offer_details
        price
        qualifications
        headline
        rate_type
        languages
        headline
        buyOfferId
        user_id
      }
    }
  `;

  const handleSelect = (e) => {
    console.log(e);
    setOffer_type(e);
  };

  const handleSelect2 = (e) => {
    console.log(e);
    setRate_type(e);
  };

  const [create_buy_offers, { loading, error }] = useMutation(ADD_BUY_OFFER, {
    variables: {
      object: {
        industry: industry,
        offer_type: offer_type,
        offer_details: offer_details,
        price: price,
        qualifications: qualifications,
        headline: headline,
        rate_type: rate_type,
        languages: languages,
        user_id: user_id,
      },
    },
  });

  if (loading) return "Submitting...";
  if (error) {
    setStatus("error");

    return `Submission error! ${error.message}`;
  }

  function redirectTo(props) {
    navigate(`/${props}`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    create_buy_offers({
      industry,
      offer_type,
      offer_details,
      price,
      qualifications,
      headline,
      rate_type,
      languages,
      user_id,
    });
    alert(
      'Thank you for submitting the form. You can always examine or edit it under the tab "My Profile"'
    );
    redirectTo("Home");
  };

  /*    addBuy({variables:{industry: input.value, offer_type: input.value, 
      offer_details: input.value, price: input.value, qualifications: input.value, 
      user_id: input.value, buy_offer_id:input.value }}) */

  return (
    <div id="container_Buy">
      <h2 class="Headline">CREATE AN OFFER TO BUY</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <ul class="flex-outer">
          <li>
            <label for="first-name">
              In what industry are you looking for data or research?
            </label>
            <input
              type="string"
              id="industry"
              name="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
          </li>
          <li>
            <DropdownButton
              alignRight
              title="What type of product are you looking for?"
              id="dropdown-menu-align-right"
              drop="end"
              onSelect={handleSelect}
              value={offer_type}
            >
              <Dropdown.Item eventKey="Data">Dataset/ Report</Dropdown.Item>
              <Dropdown.Item eventKey="Consulting- live discussion">
                One-on-One Consultation ( Phone/ videochat)
              </Dropdown.Item>
              <Dropdown.Item eventKey="Both">Both</Dropdown.Item>
            </DropdownButton>
            <h4 className="result">{offer_type}</h4>
          </li>

          <li>
            <label for="offer_details">
              Please provide details of what you are seeking:
            </label>
            <textarea
              rows="6"
              placeholder="Enter your message here"
              input
              class="string"
              name="offer_details"
              value={offer_details}
              onChange={(e) => setOffer_details(e.target.value)}
              required
            ></textarea>
          </li>
          <li>
            <label for="qualifications">
              What are the qualifications you require of the seller?{" "}
            </label>
            <textarea
              rows="6"
              input
              class="string"
              name="qualifications_sell"
              maxLength="400"
              id="qualifications_sell"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              placeholder="(i.e. number of years of experience, work with specific companies or industry, knowledge of specific fields, level of education, certifications, achievments, etc.)"
              required
            ></textarea>
          </li>
          <li>
            <label for="languages">
              What languages are you looking to communicate in?
            </label>
            <input
              type="varchar"
              name="languages"
              value={languages}
              placeholder="English"
              onChange={(e) => setLanguages(e.target.value)}
              required
            />
          </li>
          <li>
            <DropdownButton
              alignRight
              title="Are you charging based on a per hour or flat-rate basis?"
              id="dropdown-menu-align-right"
              onSelect={handleSelect2}
              value={rate_type}
            >
              <Dropdown.Item eventKey="Flat rate">Flat rate</Dropdown.Item>
              <Dropdown.Item eventKey="Per/hour">Per hour</Dropdown.Item>

              <Dropdown.Divider />
            </DropdownButton>
            <h4 className="result">{rate_type}</h4>
          </li>
          <li>
            <label for="phone">
              How much are you willing to offer for these services or data?
            </label>
            <input
              class="varchar"
              name="price"
              id="price"
              maxLength="50"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="$"
              required
            />
          </li>
          <li>
            <label for="headline">
              Please provide a headline summary of what you are seeking (Less
              than 100 words){" "}
            </label>
            <textarea
              rows="6"
              input
              class="string"
              name="headline"
              id="headline"
              maxLength="255"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
            ></textarea>
          </li>

          <li>
            <button type="submit" id="submitMe">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CreateBuy;
