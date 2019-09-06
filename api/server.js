var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var wallet = require('../src/wallet.js');
var wallet_test = new wallet();
const httpClient = require('request-promise')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getBalance', function(req, res) {
  response = {
    balance : wallet_test.getBalance()
  }
  res.end(JSON.stringify(response));

});

app.get('/initiate/:balance', function(req, res) {
  wallet_test.setBalance(parseInt(req.params.balance));
  response = {
    balance : wallet_test.getBalance()
  }
  res.end(JSON.stringify(response));

});

app.put('/addBalance/:balance', function(req, res){
  wallet_test.addBalance(parseInt(req.params.balance));
  response = {
    balance : wallet_test.getBalance()
  }
  res.end(JSON.stringify(response));
});

app.put('/takeBalance/:balance', function(req, res){
  wallet_test.takeBalance(parseInt(req.params.balance));
  response = {
    balance : wallet_test.getBalance()
  }
  res.end(JSON.stringify(response));
});


app.get('/', function(req, res) {
  res.render('index',{balance: wallet_test.getBalance(),error: null, success:null});
});

app.post('/add', async function(req,res){
  balance = parseFloat(req.body.balance_to_add);
  httpOptions = {
    method: 'PUT',
    uri: 'http://localhost:3000/addBalance/' + balance,
    json: true,
    resolveWithFullResponse: true,
    body:{} 
  }
  await httpClient(httpOptions)
  .then(function(response) {
      walletResponse = response;
  })
  .catch(function(error) {
      walletResponse = error;
  });

  res.render('index',{balance: walletResponse.body.balance,error: null,success:'Has been added to balance', added:balance});
});

app.post('/take',async function(req,res){
  balance = parseFloat(req.body.balance_to_take);
  httpOptions = {
    method: 'PUT',
    uri: 'http://localhost:3000/takeBalance/' + balance,
    json: true,
    resolveWithFullResponse: true,
    body:{} 
  }
  await httpClient(httpOptions)
  .then(function(response) {
      walletResponse = response;
  })
  .catch(function(error) {
      walletResponse = error;
  });

  res.render('index',{balance: walletResponse.body.balance,error: null,success:null,taken:balance});
});


app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});