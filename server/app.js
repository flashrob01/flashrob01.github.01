const express = require('express')



const bodyParser = require('body-parser')
const app = express()
const db = require('./routes/users')
// './users' above refers to the file named 'users', the bottom refers to the designated destination path /users'
const buyOffersRouter = require('./routes/buy_offers')
const sellOffersRouter = require('./routes/sell_offers')
const reviewsRouter = require('./routes/reviews')
const cors = require('cors')



//const session = require('express-session')


//const port = 4000;

//below from Shaun of Dead - Google

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

// auth logout
app.get('/logout', (req, res) => {
  res.send('logging out')
});

const allowedOrigins = ['http://ddrc-app.herokuapp.com'];
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        callback(null, true) 
      } else {
        callback(new Error(`Origin: ${origin} is now allowed`))
      }
    }
  }));

/*

const corsOptions = {
  origin: "http://ddrc-app.herokuapp.com",
  credentials: true,
  optionSuccessStatus: 200,
}
This seems to have fixed the CORS issue - from the CORS book

app.use(cors(corsOptions));
*/
//copied from sunshine-server==

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://ddrc-app.herokuapp.com/")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  });
*/
//This seems to have fixed the CORS issue - from the CORS book



/* function requestAccessToken(code,state) {
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
}  */

// above from Tony Xu callback.js!!

/* 
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'client/build'))); */
//above from tony xu - LI


 app.use(bodyParser.json()); 

 app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);   
//app.use.urlencoded() tells the program that app.post ( req.body.email) will take email from form ; (req.body.name) will take name field from form, etc.



//app.get('/', (request, response) => {
  //  response.json({ info: 'DDR - Node.js, Express, and Postgres API' })
 // })
   


//, ((req, res) => {
//  res.status(201).json(req.user)   <- from sunshine server code

app.get('/logout', ((req, res) => {
  req.logout();
  res.status(200).redirect('/');
}))
//'login' and 'logout' both from sunshine server

app.get('/users', db.getUsers)
app.get('/users/:user_id', db.getUserById)
app.post('/users', db.createUser)

app.post('/buy_offers', buyOffersRouter);

app.put('/users/:user_id', db.updateUser)

app.delete('/users/:user_id', db.deleteUser)

app.use('/buy_offers', buyOffersRouter);
//imports the buy_offers Router...

app.use('/sell_offers', cors(corsOptions), sellOffersRouter);
//imports the sell_offers Router...


app.use('/reviews', reviewsRouter);


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


module.exports = app;
//added this command from sunshine server file after rename from index.js
