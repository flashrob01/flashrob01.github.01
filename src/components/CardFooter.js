import React from 'react';
import './../styles//CardFooter.css';

function CardFooter() {
   return (
      <React.Fragment>
         <div className='card-footer-container'>
            <div className='card-footer-list'>
               <div className='list-item'>
                  <p className='primary-text'>80K</p>
                  <p className='secondary-text'>Followers</p>
               </div>
               <div className='list-item'>
                  <p className='primary-text'>803K</p>
                  <p className='secondary-text'>Likes</p>
               </div>
               <div className='list-item'>
                  <p className='primary-text'>1.4K</p>
                  <p className='secondary-text'>Photos</p>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

export default CardFooter;