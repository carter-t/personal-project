const express = require('express'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      config = require('./config.js');

const app = express();

app.use(session({secret: 'CerberusRex'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/me'}));

passport.serializeUser((profile, done) => {
  done(null, profile);
});

passport.deserializeUser((profileFromSession, done) => {
  done(null, profileFromSession);
});

app.get('/me', (req, res) => {
  res.send(req.user);
});

const port = 3000;
app.listen(port, console.log('Portal #' + port));