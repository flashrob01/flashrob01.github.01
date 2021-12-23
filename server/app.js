

const express = require('express')

//below from Shaun dead- linkedin

//require('./config/passport-setup');

//require('./config/passport')(passport);
//above from Shaun dead- linkedin


const bodyParser = require('body-parser')
const app = express()
const db = require('./routes/users')
// './users' above refers to the file named 'users', the bottom refers to the designated destination path /users'
const buyOffersRouter = require('./routes/buy_offers')
const sellOffersRouter = require('./routes/sell_offers')
const reviewsRouter = require('./routes/reviews')
const callbackRouter = require('./routes/callbackRouter')
const cors = require('cors')



//const session = require('express-session')


const port = 4000;

//below from Shaun of Dead - Google

app.get('/', (req, res) => {
  res.render('home');
});

/*  app.get('./auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('./auth/google/callback', 
passport.authenticate('google'), (req, res) => {
  res.send('you reached the redirect URI')
}); 

//app.use('./auth/', googleRouter);
app.use(passport.initialize());
app.use(passport.session()); */

app.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

// auth logout
app.get('/logout', (req, res) => {
  res.send('logging out')
});

// auth with google+
/* app.get('/auth/google', passport.authenticate('google', {
  scope:['profile']
})); */

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
/* app.get('/callback', passport.authenticate('google'), (req, res) => {
  res.send('you reached the redirect URI')
});
 */

//passport.use(
/*   new GoogleStrategy({
      //clientID: keys.google.clientID,
      clientID: '945534071112-bsdoic6f53r603gfnvil9g3ebf2kvnsk.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'https://blue-swan-89.loca.lt/callback'

  }, (request, accessToken, refreshToken, profile, done) => {
   
     
      //User.findOrCreate({googleID: profile.id}, function(err, user){
        //  return done(err, user);
        console.log('hello, callback function fired.');
        console.log(profile);
      })
  
)
 */

//above from Shaun of Dead- Google

//below from Tony Xu LinkedIn
/* var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const config = require('./config') */
//above from Tony Xu- Linkedin



//var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
//Above appears to be old; deprecated. Does this LinkedInStrategy tie to 'linkedin' term below???

//const LocalStrategy = require('passport-local').Strategy;





/* app.use(logger('dev)'));
//from Tony Xu- Morgan is logging tool, 'dev' is a color-coded option

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser()); */
//above 3 from Tony Xu- LinkedIn; need to FOLLOW UP and read DOCS how they work!!



const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
//This seems to have fixed the CORS issue - from the CORS book





//below code from Poorshad - LinkedIn article - did not work
 /* passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user,done) => {
  done(null, user);
});
app.use(session({ secret:"SESSION_SECRET"}));
app.use(passport.initialize());
app.use(passport.session());  */
//5 above from Harsh medium article
 
/* app.use(express.json());
app.use(express.urlencoded({extended: false}));
//both above from Medium Harsh article
 
passport.use(new LinkedInStrategy({
  clientID:'868dd98yvyhfen', 
  clientSecret:'qxXla7X8WC5lxd2h',
  callbackURL:"http://localhost:3000/callback",
  scope:['r_emailaddress', 'r_liteprofile']
}, function(accessToken, refreshToken, profile, done){ */

/*   //asynchronous verification, for effect...
  process.nextTick(function(){ */
       // To keep the example simple, the user's LinkedIn profile is returned to
  // represent the logged-in user. In a typical application, you would want
  // to associate the LinkedIn account with a user record in your database,
  // and return that user instead.
/*   
  
  var firstname = profile.first_name;
  var lastname = profile.last_name;
  var email = profile.email;
console.log(firstname+" "+lastname+" "+email);

         return done(null, profile);

  });
}
)); */

//above passport use from Poorshad Medium article


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

//app.use(passport.initialize())
//app.use(passport.session())
//copied from sunshine server

//below from Tony Xu-LI
//app.use('/callbackRouter', callbackRouter);


/* app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
})); */

//below from Tony Xu callback.js!!!

/* Handle LinkedIn OAuth callback and return user profile. */
/* app.get('/', function(req, res, next) {
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
} */

// above from Tony Xu callback.js!!

/* 
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'client/build'))); */
//above from tony xu - LI

/* 
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); */
//app.use.urlencoded() tells the program that app.post ( req.body.email) will take email from form ; (req.body.name) will take name field from form, etc.

//both app.gets below from Poorshad Linkedin article
/*  app.get('/auth/linkedin',
  passport.authenticate('linkedin', {state: "SOME STATE"}),
  );
  
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));  */

  //both app.gets above from Harsh Medium article (and also sort of from passportjs.org for linkedin Oath)

  //from tony xu
  //app.use('/', callbackRouter);
  //from tony xu

//app.get('/', (request, response) => {
  //  response.json({ info: 'DDR - Node.js, Express, and Postgres API' })
 // })

  //below from Poorshad Linkedin article - did not work
 /* app.get("/", (req, res)=> {
  if(req.user){
    const name=req.user.name.givenName;
    const family=req.user.name.familyName;
    const photo=req.user.photos[0].value;
    const email=req.user.emails[0].value;

    res.send(
      `<center style="font-size: 140%"> 
      <p> User is logged in </p>
      <p>User is not logged in </p>
      <img style="cursor:pointer;" onclick="window.location='/auth/linkedIn'" src="http://bkpandey.com/wp-content/uploads/2017/09/linkedinlogin.png"/>
      </center>
      `);
    }
  }); 
   

 app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    failureFlash: true})
);  */
//above get from Harsh medium article

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

app.use('/sell_offers', sellOffersRouter);
//imports the sell_offers Router...

app.use('/callbackRouter', callbackRouter);
//imports the callbackRouter for LinkedIn usage from NPMJS;

app.use('/reviews', reviewsRouter);

app.use(cors(corsOptions));
//copied from sunshine-server==

//*below from Tony Xu
/* app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
}) */

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

/* app.get("/", (req, res)=> {
  if(req.user){
    const name=req.user.name.givenName;
    const family=req.user.name.familyName;
    const photo=req.user.photos[0].value;
    const email=req.user.emails[0].value;

    res.send(
      `<center style="font-size: 140%"> 
      <p> User is logged in </p>
      <p>User is not logged in </p>
      <img style="cursor:pointer;" onclick="window.location='/auth/linkedIn'" src="http://bkpandey.com/wp-content/uploads/2017/09/linkedinlogin.png"/>
      </center>
      `);
    }
  }); */
   

//below from Poorshad article  
/* app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    failureFlash: true})
);
 */
//above get from Harsh medium article

// Below error handlers from Tony Xu- catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
//above error handlers from Tony Xu
})
 */
module.exports = app;
//added this command from sunshine server file after rename from index.js