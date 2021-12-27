var express = require('express');
var callbackRouter = express.Router();
const request = require('superagent');
require('dotenv').config()

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

callbackRouter.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Handle LinkedIn OAuth callback and return user profile. */
//NEED to figure out how to pass code here? And also how to call this route?
callbackRouter.get('/', function(req, res, next) {
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
});

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
 

//copied and pasted the above two functions to Callback.js component I newly created

module.exports = callbackRouter;
