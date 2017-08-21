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

  db.usersTable.readUser([profile.id]).then(res => {
    if(!res.length) {
      db.usersTable.createUser([profile.id, profile.displayName, profile.emails[0].value, profile.picture]);

      db.novelsTable.createNovel([profile.id, 'Star Wars', 'Return of the Jedi', 'Sci-Fi', ['Hoth, Tatooine'], ['Jedi', 'Sith'], ['The Death Star', 'Rebel Base'], ['Luke', 'Han Solo', 'Darth Vader'], 'The ultimate sci-fi epic']);
      db.novelsTable.createNovel([profile.id, 'Lord of the Rings', 'The Fellowship of the Ring', 'Fantasy', ['Middle Earth'], ['Good', 'Evil'], ['Gondor', 'The Shire'], ['Aragorn', 'Gandalf'], 'The cornerstone fantasy novel written by Tolkien']);
      db.novelsTable.createNovel([profile.id, 'Harry Potter', 'The Sorcerer\'s Stone', 'Fantasy', ['Earth', 'The Wizarding World'], ['Wizards', 'Dark Wizards', 'Muggles'], ['Hogwarts', 'The Ministry of Magic'], ['Harry', 'Voldemort'], 'A classic story of magic and adventure']);
    
      db.worldsTable.createWorld([profile.id, 'Westoros', 'Medieval', 'Thousand Worlds', ['Continents', 'Archipelagos'], ['Magic'], ['Humans', 'Native Humanoids'], 'Resembling medieval Europe with a fantasy twist', 'Everyone kills everyone forever and then dragons come']);
      db.worldsTable.createWorld([profile.id, 'Azeroth', 'Medieval', 'WoW', ['Continents'], ['Magic', 'Technology'], ['Humans', 'Native Humanoids', 'Entities'], 'Fantasy realm of multiple races and factions fighting to stop the demon race', 'Humans kill orcs, Elves huff magic, and Demons are OP']);
    
      db.factionsTable.createFaction([profile.id, 'House Lannister', 'Lawful Evil', 'A Lannister always pays his debts', ['Empire/Dictatorship'], ['Political', 'War/Violence'], ['Military', 'Capital'], 'The wealthiest and most powerhungry house is Westeros', 'See: The Rains of Castamere']);

      db.placesTable.createPlace([profile.id, '221B Baker Street', 'Victorian Era', 'London', ['Building'], ['Urban'], ['Secure', 'Chaotic'], 'The home of Sherlock Holmes and Watson', 'Moved into when both characters where desperate for a roommate']);

      db.peopleTable.createPerson([profile.id, 'Francis', 'Underwood', 'President', '50?', 'Male', 'Human', 'Lawful Evil', 'There is but one rule: Hunt or be Hunted', 'Cunning narcissist', ['Mentor/Mastermind'], ['Power', 'Status'], ['Manipulation', 'Strategy', 'Intimidation'], 'Will stop at nothing for power', 'Southern roots, an abusive father, and military school make for one hell of an antivillain']);
      db.peopleTable.createPerson([profile.id, 'Jon', 'Snow', 'Bastard of Winterfell', '20ish?', 'Male', 'Human', 'Lawful Good', 'Winter is coming', 'Cool & Honorable', ['Champion/Mercenary'], ['Honor', 'Responsibility', 'Status'], ['Combat', 'Strategy', 'Charisma'], 'Dude with severe daddy issues', 'Who really knows at this point'])
      db.peopleTable.createPerson([profile.id, 'Luke', 'Skywalker', 'Jedi', '20ish?', 'Male', 'Human', 'Neautral Good', 'NOOO!!! - Upon meeting his father', 'Naeive', ['Everyman'], ['Peace', 'Equality', 'Freedom'], ['Combat', 'Supernatural'], 'Standard archetypal hero', 'His dad did some bad stuff and for some reason that makes him qualified to stop him, despite living in the middle of nowhere all his life']);
    }
  return done(null, profile);
  });

  app.get('/api/userData', (req, res) => {
    let db = app.get('db');
    db.usersTable.readUser([profile.id]).then(userData => {
      res.send(userData);
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

app.post('/api/formData/', (req, res) => {
  let db = app.get('db');
  db.novelsTable.createNovel([req.body.id, req.body.title, req.body.volume, req.body.genre, req.body.worlds, req.body.factions, req.body.places, req.body.people, req.body.synopsis]);
})

app.get('/api/novelOne', (req, res) => {
  let db = app.get('db');
  db.novelsTable.readNovel(1).then(novelOne => {
    res.send(novelOne);
  });
});

app.get('/api/novelTwo', (req, res) => {
  let db = app.get('db');
  db.novelsTable.readNovel(2).then(novelTwo => {
    res.send(novelTwo);
  });
});

app.get('/api/novelThree', (req, res) => {
  let db = app.get('db');
  db.novelsTable.readNovel(3).then(novelThree => {
    res.send(novelThree);
  });
});

app.get('/api/worldOne', (req, res) => {
  let db = app.get('db');
  db.worldsTable.readWorld(1).then(worldOne => {
    res.send(worldOne);
  });
});

app.get('/api/worldTwo', (req, res) => {
  let db = app.get('db');
  db.worldsTable.readWorld(2).then(worldTwo => {
    res.send(worldTwo);
  });
});

app.get('/api/factionOne', (req, res) => {
  let db = app.get('db');
  db.factionsTable.readFaction(1).then(factionOne => {
    res.send(factionOne);
  });
});

app.get('/api/placeOne', (req, res) => {
  let db = app.get('db');
  db.placesTable.readPlace(1).then(placeOne => {
    res.send(placeOne);
  });
});

app.get('/api/personOne', (req, res) => {
  let db = app.get('db');
  db.placesTable.readPerson(1).then(personOne => {
    res.send(personOne);
  });
});

app.get('/api/personTwo', (req, res) => {
  let db = app.get('db');
  db.placesTable.readPerson(2).then(personTwo => {
    res.send(personTwo);
  });
});

app.get('/api/personThree', (req, res) => {
  let db = app.get('db');
  db.placesTable.readPerson(3).then(personThree => {
    res.send(personThree);
  });
});

massive(config.massive).then(db => {
    app.set('db', db);
    db.usersTable.userSchema();
    db.novelsTable.novelSchema();

    app.listen(config.port, console.log('Portal #' + config.port));
});