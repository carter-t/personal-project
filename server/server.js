const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const config = require('./config.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(session({secret: config.secret}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
}, (accessToken, refreshToken, extraParams, profile, done) => {
  let db = app.get('db');

  db.users.readUser([profile.id]).then(res => {
    if(!res.length) {
      db.users.createUser([profile.id, profile.displayName, profile.emails[0].value, profile.picture]);
    }
  return done(null, profile);
  });

  app.get('/api/user', (req, res) => {
    let db = app.get('db');
    db.users.readUser([profile.id]).then(user => {
      res.send(user);
    });
  });

}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000'}));

passport.serializeUser((profile, done) => {
  done(null, profile);
});

passport.deserializeUser((profileFromSession, done) => {
  done(null, profileFromSession);
});

massive(config.massive).then(db => {
    app.set('db', db);
    db.users.userSchema();

    app.listen(config.port, console.log('Portal #' + config.port));
});