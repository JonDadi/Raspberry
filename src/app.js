const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const gpio = require("pi-gpio");

const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true,
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'Pug');

app.get('/', (req, res) => {
  res.render('index', {});
});

app.get('/test', (req, res) => {
  gpio.open(16, "output", (err) => {		// Open pin 16 for output
    gpio.write(16, 1, function() {			// Set pin 16 high (1)
        gpio.close(16);						// Close pin 16 
  });
});
  res.render('index', {});
});

module.exports = app;
