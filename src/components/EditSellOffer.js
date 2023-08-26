import React, { useState } from "react";
//import {fetchingOffers, gotOffers, fetchingOffersFailed} from '../slice_reducers/offersSlice.js';
import "./../styles/CreateSell.css";
//const axios = require('axios');
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const EditSellOffer = () => {
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

  let navigate = useNavigate();

  const GET_SELL_OFFERS_QUERY = gql`
    query GetSellOffers($sell_offer_id: Int!) {
      sell_offers(where: { sell_offer_id: { _eq: $sell_offer_id } }) {
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
      insert_sell_offers_one(
        object: $object
        on_conflict: {
          constraint: sell_offers_pkey
          update_columns: [
            industry
            offer_type
            offer_details
            target_audience
            price
            qualifications
            headline
            rate_type
            target_audience
            region
            languages
          ]
        }
      ) {
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

  const { sell_offer_id } = useParams();

  var number = Number(sell_offer_id);

  const { data, loading, error } = useQuery(GET_SELL_OFFERS_QUERY, {
    variables: { sell_offer_id },
  });

  const handleSelect = (e) => {
    console.log(e);
    setOffer_type(e);
  };

  const handleSelect2 = (e) => {
    console.log(e);
    setRate_type(e);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      NOTE- there is a small bug with this edit form. Please make sure to make a
      small edit to each field before submitting, or else the previous data will
      not be registered. This bug will be addressed in the next update.
    </Tooltip>
  );

  const [create_sell_offers] = useMutation(ADD_SELL_OFFER, {
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
        sell_offer_id: number,
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
    alert("You have submitted the form.");
    redirectTo("Profile");
  };

  /* const handleRate = (event) => {
    setRate_type(event.target.value);
  };

  const handleOffer = (event) => {
    setOffer_type(event.target.value);
  }; */

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
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <input
                type="string"
                id="industry"
                name="industry"
                defaultValue={data.sell_offers[0].industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
              />
            </OverlayTrigger>
          </li>
          <li>
            <DropdownButton
              alignRight
              title="What type of product are you offering?"
              id="dropdown-menu-align-right"
              drop="end"
              required
              onSelect={handleSelect}
              value={offer_type}
            >
              <Dropdown.Item eventKey="data">Dataset/ Report</Dropdown.Item>
              <Dropdown.Item eventKey="consulting- live discussion">
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
              input
              class="string"
              name="offer_details"
              defaultValue={data.sell_offers[0].offer_details}
              onChange={(e) => setOffer_details(e.target.value)}
              required
            ></textarea>
          </li>
          <li>
            <label for="qualifications">
              Please provide a short biography describing your relevant
              qualifications and experience:{" "}
            </label>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <textarea
                rows="6"
                input
                class="string"
                name="qualifications"
                maxLength="400"
                id="qualifications"
                defaultValue={data.sell_offers[0].qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                placeholder="(i.e. number of years of experience, work with specific companies or industry, knowledge of specific fields or industries, level of education, certifications, achievments, etc.)"
                required
              ></textarea>
            </OverlayTrigger>
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
              defaultValue={data.sell_offers[0].target_audience}
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
              defaultValue={data.sell_offers[0].languages}
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
              defaultValue={data.sell_offers[0].region}
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
              <Dropdown.Item eventKey="flat rate">Flat rate</Dropdown.Item>
              <Dropdown.Item eventKey="per/hour">Per hour</Dropdown.Item>

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
              defaultValue={data.sell_offers[0].price}
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
              defaultValue={data.sell_offers[0].headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
            ></textarea>
          </li>
          <li>
            <label for="sell_offer_id">Sell Offer ID</label>
            <input
              class="varchar"
              name="sell_offer_id"
              id="sell_offer_id"
              value={number}
              defaultValue={number}
              readonly="readonly"
            ></input>
          </li>

          <li>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <button type="submit">Submit</button>
            </OverlayTrigger>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default EditSellOffer;
