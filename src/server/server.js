const express = require('express');
const bodyParser = require('body-parser');
const React = require('react');
const {renderToString} = require('react-dom/server');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

const port = 3000;

// app.get('/', (req, res) => {
//   const db = req.app.get('db');
//   db.getAllInjuries().then(injuries => {
//     res.send(injuries);
//   });
// });

app.get('/', (req, res) => {
  const db = req.app.get('db');
  db.getAllInjuries().then(injuries => {
    const content = (
      <table>
        {injuries.map(injury => 
          <tr>
            <td> {injury.id} </td>
            <td>  {injury.name} </td>
            <td>  {injury.description} </td>
          </tr>
        )}
      </table>
    );
  res.send(renderToString(content));
  });
});

app.get('/incidents', (req, res) => {
  const db = req.app.get('db');
  const state = req.query.state;
  if(state) {
    db.getIncidentsByState([state]).then(incidents => {
      res.send(incidents);
    });
  } else {
    db.getAllIncidents().then(incidents => {
      res.send(incidents);
    });
  }
});

app.post('/incidents', (req, res) => {
  const db = req.app.get('db');
  const incident = req.body;
  db.createIncident([incident.state, incident.causeId, incident.injuryId])
  .then(results => {
    res.send(results);
  });
});

massive('postgres://oieqlzxiltdtto:65c65e6d4006ec3b58ab877d82b751bbfee3a2fd167efceb64e405727a5c1143@ec2-107-21-109-15.compute-1.amazonaws.com:5432/dandvtfpf7on3m?ssl=true')
  .then(db => {
    console.log(db);

    app.set('db', db);
    app.listen(port, () => {
      console.log('Started server on port', port);
    });
});