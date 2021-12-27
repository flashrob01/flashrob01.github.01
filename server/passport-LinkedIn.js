const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const db = require('./routes/users')

passport.use(new LinkedInStrategy({
    clientID:'868dd98yvyhfen', 
    clientSecret:'qxXla7X8WC5lxd2h',
    callbackURL:"http://localhost:3000",
    scope:['r_emailaddress', 'r_liteprofile']
}, function(accessToken, refreshToken, profile, done){

    //asynchronous verification, for effect...
    process.nextTick(function(){
         // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    
    
    var firstname = profile.first_name;
    var lastname = profile.last_name;
    var email = profile.email;
	console.log(firstname+" "+lastname+" "+email);

           return done(null, profile);

    });
}
));