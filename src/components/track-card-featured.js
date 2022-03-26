import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../styles';

import './../styles/TrackCardFeatured2.css';
import N3_logo from '../images/N3_logo.jpg'


/**
 * Track Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
const TrackCardFeatured = () => {

  

  return (
    
    <div>
<div id="CoverImage"/> 
<h1 className='headline'> Featured Consultant </h1>
                Hello!
                
                <div id="banner"></div>
                <div className="CardImage"/> 


                <div id="logo">
              
                
            </div>


    <div id='CardContainer'
    >
                      <div img src={N3_logo}/>

      <div id='CardContent'>
        <div id='CardImageContainer'>
          What on earth...
        < div id="CardImage"/> 
        </div>
        <div id='CardBody'>
          <div id='CardTitle'>Hi</div>
          <div id='CardFooter'>
            <div id='AuthorImage'>Hi </div> 
            <div id='AuthorAndTrack>
              <div id='AuthorName>Allo!</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCardFeatured;
