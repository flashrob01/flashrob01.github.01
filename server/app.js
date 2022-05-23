const express = require('express')



const bodyParser = require('body-parser')
const app = express()
const db = require('./routes/users')
// './users' above refers to the file named 'users', the bottom refers to the designated destination path /users'
const buyOffersRouter = require('./routes/buy_offers')
const sellOffersRouter = require('./routes/sell_offers')
const reviewsRouter = require('./routes/reviews')
const cors = require('cors')

//--https://betterprogramming.pub/build-a-send-me-a-message-component-for-your-site-229c2b8195e1
/* creds=require("./config")
nodemailer = require("nodemailer")
app.use(express.json());

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
});

transporter.verify((err, success) => {
  if (err) {
    console.log(error);
  } else {
    console.log("Successfully signed into Gmail account");
  }
}); */

app.post("/send", (req, res) => {
  const { name } = req.body;
  const { message } = req.body;

  var mail = {
    from: name,
    to: "Enter your email here",
    subject: "Feedback From The Blog",
    html: `${message}` + "<br><br>Kindly,<br>" + `${name}`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: "err" });
    } else {
      res.json({ msg: "suc" });
    }
  });
});

//--

//const session = require('express-session')


const port = 4000;

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

app.options('https://bright-mullet-79.hasura.app/v1/graphql/', cors());
//app.options above worked to eliminate the CORS error!!! - https://stackoverflow.com/questions/67716707/cors-response-to-preflight-request-doesnt-pass-access-control-check-when-add-h

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
//This seems to have fixed the CORS issue - from the CORS book

app.use(cors(corsOptions));
//copied from sunshine-server==

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", "application/x-www-form-urlencoded");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Origin', '*');
 /*  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', "application/x-www-form-urlencoded");
  res.header('Access-Control-Allow-Credentials', true); */
  next();
});

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