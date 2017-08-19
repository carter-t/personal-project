const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const config = require('./config.js');

const app = express();
const db = app.get('db');

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
  db.usersTable.readUser([profile.id]).then(res => {
    if(!res.length) {
      db.usersTable.createUser([profile.id, profile.displayName, profile.emails[0].value, profile.picture]);
      // db.novelsTable.createNovel([config.authid, 'novel 1', 'a', 'b', 'c', 'd', 'e', 'f', 'g']);
    }
  return done(null, profile);
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

// app.get('/userData', (req, res) => {
//   res.send(req.user);
// });

app.get('/userData', (req, res) => {
  let db = app.get('db');
  db.usersTable.readUser([config.authid]).then(userData => {
    res.send(userData);
  });
});

// app.get('/novels', (req, res) => {
//   const db = app.get('db');
//   // const novel = db.novelsTable.readNovel([config.authid])
//   // res.send(req.novel);
//   db.novelsTable.createNovel([config.authid, '2', '3', '4', '5', '6', '7', '8', '9']);
// });

massive(config.massive).then(db => {
    app.set('db', db);
    db.usersTable.userSchema();
    db.novelsTable.novelSchema();

    app.listen(config.port, console.log('Portal #' + config.port));
});