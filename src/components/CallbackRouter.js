import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './../styles/About.css';
const request = require('superagent');
require('dotenv').config()







const CallbackRouter = () => {
    //const [industry, setIndustry] = useState('');

    // to delete below after update handlesubmit BELOW
  /*   callbackRouter.get('/', function(req, res, next) {
      requestAccessToken(req.query.code,req.query.state)
      .then((response) => {
        requestProfile(response.body.access_token)
        .then(response => {
          console.log(response.body)
          res.render('callback', { profile: response.body});
        })
      })
      .catch((error) => {
        res.status(500).send(`${error}`)
        console.error(error)
      })
    }); */

    // to delete above after handlesubmit below
    function postData(url = 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=AQRvRGxQ0Ei99x_A9S5HwQxgTk_G4q9ecg1cOGBzFpuNK6gTWg16jJVvNdrOkGPBXlagNnWiioT97GLBLDN9lxF6GM98XE5ZiXCtg1RQI0p36ENDCUgR515t1m7bxrJTEuA2CtRKQ4GtZSpedn3rzBYEDgvLo4a1IJDJW7jh9etFdmf5hIDajCvhpCtQ9uA0DFU-6eXWRITfps1liME&redirect_uri=http://localhost:3000/login/callback&client_id=868dd98yvyhfen&client_secret=qxXla7X8WC5lxd2h', data = {}) {

     const handleSubmit = (e) => {
        e.preventDefault();
     //   const points = {access_token, expires_in}};
          const points = {}};

        const response = fetch(url, {
       
           method: 'POST',
           headers: {"Content-Type": "x-www-form-urlencoded"},
    //       body: JSON.stringify(points)
    }).then((response) => {
      requestProfile(response.body.access_token)
      .then(response => {
        console.log(response.body)
   //     res.render('callback', { profile: response.body});
      })
    })
    .catch((error) => {
 //     res.status(500).send(`${error}`)
      console.error(error)
    })
  };


       //cut and pasted the below two functions from callback.js routes
       function requestAccessToken(code,state) {
        return request.post('https://www.linkedin.com/oauth/v2/accessToken')
          .send('grant_type=authorization_code')
          .send(`redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`)
          .send(`client_id=${process.env.REACT_APP_CLIENT_ID}`)
          .send(`client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
          .send(`code=${code}`)
          .send(`state=${state}`)
      }
      
      function requestProfile(token) {
        return request.get('https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))')
        .set('Authorization', `Bearer ${token}`)
      }

      //cut and pasted the above two functions from callback.js routes

      return (
        <div className='pageContainer'>
            {<div>
            <p className='boldOrange'></p><br/>
            <button onClick={postData}>Fetching Access Token</button>
            </div>}
            </div>

      )
}

export default CallbackRouter;