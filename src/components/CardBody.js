import React from 'react';
import './../styles/CardBody.css';

function CardBody() {
   return (
      <React.Fragment>
         <div className='card-body-container'>
            <img src='../images/Consulting4.jpg' alt='Profile of Victor' />
            <div className='text-container'>
               <p className='main-text'>
                  Victor Crest <span>26</span>
               </p>

               <p className='secondary-text'>London</p>
            </div>
         </div>
      </React.Fragment>
   );
}

export default CardBody;