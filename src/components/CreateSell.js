import { useState } from "react";
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import "./../styles/CreateSell.css";
//const axios = require('axios');
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { gql, useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const CreateSell = () => {
  const [industry, setIndustry] = useState("");
  const [offer_type, setOffer_type] = useState("");
  const [offer_details, setOffer_details] = useState("");
  const [price, setPrice] = useState("");
  const [headline, setHeadline] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [rate_type, setRate_type] = useState("");
  const [target_audience, setTarget_audience] = useState("");
  const [region, setRegion] = useState("");
  const [languages, setLanguage] = useState("");
  /* const [user_id, setUser_id] = useState('');
   */

  const { user } = useAuth0();

  const [status, setStatus] = useState("");

  const user_id = user.sub;

  //const [body, setBody] = useState('');

  //const [values, handleChange] = UseForm({industry:"", offer_type:"", offer_details:"", price:"10", qualifications:"", user_id:"", buy_offer_id:""});
  //const values = {industry, offer_type, offzer_details, price, qualifications, user_id, buy_offer_id};

  let input;

  const GET_SELL_OFFERS_QUERY = gql`
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
        rate_type
        target_audience
        region
        qualifications
      }
    }
  `;

  const ADD_SELL_OFFER = gql`
    mutation sell_offers($object: sell_offers_insert_input!) {
      insert_sell_offers_one(object: $object) {
        industry
        offer_type
        offer_details
        target_audience
        price
        qualifications
        headline
        sell_offer_id
        user_id
        rate_type
        target_audience
        region
        languages
        user_id
      }
    }
  `;

  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setOffer_type(e);
  };

  const [value2, setValue2] = useState("");
  const handleSelect2 = (e) => {
    console.log(e);
    setRate_type(e);
  };

  let navigate = useNavigate();

  const [create_sell_offers, { data, loading, error }] = useMutation(
    ADD_SELL_OFFER,
    {
      variables: {
        object: {
          industry: industry,
          offer_type: offer_type,
          offer_details: offer_details,
          price: price,
          qualifications: qualifications,
          headline: headline,
          rate_type: rate_type,
          target_audience: target_audience,
          region: region,
          languages: languages,
          user_id: user_id,
        },
      },
    }
  );

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
    create_sell_offers({
      industry,
      offer_type,
      offer_details,
      price,
      qualifications,
      headline,
      rate_type,
      target_audience,
      region,
      languages,
      user_id,
    });
    alert(
      'Thank you for submitting the form. You can always examine or edit it under the tab "My Profile"'
    );
    redirectTo("Home");
  };

  const handleRate = (event) => {
    setRate_type(event.target.value);
  };

  const handleOffer = (event) => {
    setOffer_type(event.target.value);
  };

  /*    addBuy({variables:{industry: input.value, offer_type: input.value, 
      offer_details: input.value, price: input.value, qualifications: input.value, 
      user_id: input.value, buy_offer_id:input.value }}) */

  return (
    <div class="container-Sell">
      <h2 class="Headline">List your services</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <ul class="flex-outer">
          <li>
            <label for="first-name">
              What is your industry or sector of expertise?
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
              title="What type of product are you offering?"
              id="dropdown-menu-align-right"
              drop="end"
              onSelect={handleSelect}
              value={offer_type}
            >
              <Dropdown.Item eventKey="Data">Dataset/ Report</Dropdown.Item>
              <Dropdown.Item eventKey="Consulting- live discussion">
                One-on-One Consultation ( Phone/ videochat)
              </Dropdown.Item>

              <Dropdown.Divider />
            </DropdownButton>
            <h4 className="result">{offer_type}</h4>
          </li>

          <li>
            <label for="offer_details">
              Please provide details of what you are providing:
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
              What your relevant qualifications?:{" "}
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
              placeholder="(i.e. number of years of experience, work with specific companies or industry, knowledge of specific fields or industries, level of education, certifications, achievments, etc.)"
              required
            ></textarea>
          </li>
          <li>
            <label for="target_audience">
              Describe your target audience or market:
            </label>
            <textarea
              rows="6"
              input
              class="string"
              name="target_audience"
              value={target_audience}
              onChange={(e) => setTarget_audience(e.target.value)}
              placeholder="Enter your message here"
              required
            ></textarea>
          </li>
          <li>
            <label for="languages">
              What languages are you available to communicate in?
            </label>
            <input
              type="varchar"
              name="languages"
              value={languages}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
          </li>
          <li>
            <label for="region">
              What is your current location or the location/region of your
              expertise?:
            </label>
            <input
              type="varchar"
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
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
              How much are you charging for your services or data?
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
              Please provide a headline summary of who you are and what you're
              offering (Less than 100 words){" "}
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

export default CreateSell;
