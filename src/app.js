const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const gpio = require("pi-gpio");

const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true,
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {});
});

module.exports = app;
