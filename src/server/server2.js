const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');

const videos = require('videoCtrl.js');

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

const connectionString = 'postgres://oieqlzxiltdtto:65c65e6d4006ec3b58ab877d82b751bbfee3a2fd167efceb64e405727a5c1143@ec2-107-21-109-15.compute-1.amazonaws.com:5432/dandvtfpf7on3m?ssl=true';
massive(connectionString).then(dbInstance => {
  app.set('db', dbInstance);
});

app.post('/api/product', videos.create);
app.get('/api/products', videos.getAll);
app.get('/api/product/:id', videos.getOne);
app.put('/api/product/:id', videos.update);
app.delete('/api/product/:id', videos.delete);

const port = 3000;
app.listen(port, console.log('Portal #' + port));