import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import './../styles/Card.css';

function Card() {
   return (
      <React.Fragment>
         <div className='card-container'>
            <CardHeader />
            <CardBody />
            <CardFooter />
         </div>
      </React.Fragment>
   );
}

export default Card;