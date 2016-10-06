var APIKeys = require('./config');
var request = require('request');
var rp = require('request-promise');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var LocalStrategy = require('passport-local').Strategy;

//options for request-promise http request
var options = function(id, name, avatar, api){
  return {
    method: 'POST',
    uri: 'http://localhost:8888/' + api,
    body: {
        username: id,
        password: name || undefined,
        avatar: avatar || undefined,
    },
    json: true // Automatically stringifies the body to JSON
  }
}
//profile fields to request from facebook
var FBprofileFields = [
    'id',
    'displayName',
    'first_name',
    'last_name',
    'email',
    'bio',
    'work',
    'education',
    'location',
    'birthday',
    'cover',
    'picture.type(large)',
    'gender',
    'interested_in',
    'link', // FB timeline 
    'website',
    'is_verified'
  ];
/* ======================== CONFIGURATION FOR PASSPORT ================================== */
module.exports.passportConfig = function(passport){
  passport.use(new FacebookStrategy({
    clientID: APIKeys.keys.facebook.key,
    clientSecret: APIKeys.keys.facebook.secret,
    callbackURL: 'http://localhost:3010/auth/facebook/callback',
    profileFields: FBprofileFields,
  },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile.photos[0].value, 'what is this thing?');
      const endpointID = '/' + profile.id;
      var apiFields = options(profile.id, profile.displayName, profile.photos[0].value, 'login');

      rp(apiFields) //<===== server-side http request
      .then(function (user) {
          console.log(user, 'IS THIS THE DATA');
          done(null, user);
      })
      .catch(function (err) {
        console.log(err,'could not reach SquirrelDBService');
      });
    }
  ));

  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log('what\'s here in passport localstrategy hook?', username, password);
      var apiFields = options(username, password, null, 'login2');

      rp(apiFields) //<===== server-side http request
      .then(function (user) {
          console.log(user, 'IS THIS THE DATA');
          done(null, user);
      })
      .catch(function (err) {
        console.log(err,'could not reach SquirrelDBService');
        done(err);
      });
    }
  ));
/* ======================== SERIALIZE AND DESERIALIZE EACH REQUEST ================================== */
  //user ID is serialized to the session, when a request of the same ID is received it will restore the session
  passport.serializeUser(function(user, done) {
    done(null, user.fbid);
  });
  //used to check if user session is actuallly a verified user in database! 
  passport.deserializeUser(function(id, done) {
    var apiFields = options(id, null, null, 'deserialize');
    console.log('id from deserialize', id);
    rp(apiFields)
      .then(function(user){
        console.log('passport.deserilizeUser', user);
        done(null, user);
      })
      .catch(function(err){
        console.log('passport.deserilizeUser 2', err);
        done(err);
      })

  });
};