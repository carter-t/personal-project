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

console.log('Running...');

passport.use(new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
}, (accessToken, refreshToken, extraParams, profile, done) => {
  let db = app.get("db");
  db.usersTable.readUser([profile.id]).then(res => {
  if(!res.length) {
    db.usersTable.createUser([profile.id, profile.displayName, profile.name.givenName, profile.name.familyName]);
  }
  else {
    db.usersTable.readUser([profile.id]);
  }
  return done(null, profile);
});
  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/me'}));

// passport.serializeUser((profile, done) => {
//   const content = (
//     <table>
//       <tr>
//         <td> {profile.id} </td>
//       </tr>
//     </table>
//   )
//   done(null, profile);
// });

passport.deserializeUser((profileFromSession, done) => {
  done(null, profileFromSession);
});

app.get('/me', (req, res) => {
  res.send(req.user);
});

massive(config.massive).then(db => {
    app.set('db', db);
    db.usersTable.userSchema().then(res => console.log('Users:', res));
    db.novelsTable.novelSchema().then(res => console.log('Novels:', res))

    app.listen(config.port, console.log('Portal #' + config.port));
});