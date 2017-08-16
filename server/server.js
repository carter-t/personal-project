const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const config = require('./config.js');

const app = express();

app.use(session({secret: config.secret}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
}, (accessToken, refreshToken, extraParams, profile, done) => {
  console.log(profile.id);
  let db = app.get("db")
  db.usersTable.readUser([profile.id]).then(res => {
  if(!res.length) {
    db.usersTable.createUser([profile.id, profile.name.givenName, profile.name.familyName])
  }
  return done(null, profile);
})
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

massive('postgres://oieqlzxiltdtto:65c65e6d4006ec3b58ab877d82b751bbfee3a2fd167efceb64e405727a5c1143@ec2-107-21-109-15.compute-1.amazonaws.com:5432/dandvtfpf7on3m?ssl=true')
  .then(db => {
    
    app.set('db', db);
    db.usersTable.userSchema().then(res => console.log(res))
    console.log(db.usersTable.createUser);

    app.listen(config.port, () => {
      console.log('Portal #' + config.port);
    });
});