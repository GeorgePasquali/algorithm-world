const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const articleController = require('./Controllers/article');

const cors = require('cors')
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var allowedOrigins = ['http://localhost:4200'];
console.log("ADDED CORS HEADER");
app.use(cors());


app.get('/', function(req,res){
  res.json({
    hello: 'world!'
  });
});


// http://localhost:3000/api/algorithmservice/hello
app.all('/api/v1/hello', function(req, res) {
  const response = {
    message: 'hello',
    query: req.query,
    body: req.body,
  };

  let gatewayMsg = req.headers['gateway-message'];
  if(gatewayMsg) {
    response['gateway-message'] = JSON.parse(gatewayMsg);
  }

  res.json(response);
});

require('./Routes/article.routes.js')(app);

module.exports = app;
