var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var router = express.Router();
var session = require('express-session');
var authHandler = require("./handler/authHandler");

router.get('/', function(req, res, next) {
  res.render('index', {});
});

// Register user API
router.post('/register', function(req, res, next) {
	authHandler.register(req, res);
});

// Login user API
router.post('/login', function(req, res, next) {
	console.log('Login attempt!');
  authHandler.login(req, res);
});

var callbackURL = 'http://localhost:3000/facebook/profile';
passport.use(new FacebookStrategy({
  clientID: "1597319160300088",
  clientSecret: "e11b74e4feb13101daa0f2d1d19bd2e8",
  callbackURL: callbackURL,
  enableProof: true
  },
  function(accessToken, refreshToken, profile, cb) {
  	// Store facebook user details in database
    authHandler.findOrCreate(profile, function(err, user){
    	return cb(err, user);
    });
  }
));

// Request facebook login / signup
router.get('/facebook', passport.authenticate('facebook', { scope: 'email'}), function(req, res, next){
	next();
});

// Facebook callback route handler
router.get('/facebook/profile', function(req, res, next) {
  var authenticator = passport.authenticate ('facebook', {
   successRedirect: "http://localhost:3000/#/profile",
   failureRedirect: "/#/"
  });

  authenticator (req, res, function(){
  	res.render('login', {});
  });
});

module.exports = router;