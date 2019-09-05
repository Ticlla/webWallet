var express = require('express');
var app = express();
var wallet = require('../src/wallet.js');
var wallet_test = new wallet();

app.set('view engine', 'ejs');

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
  res.render('index',{balance: wallet_test.getBalance(),error: null});
});

app.post('/add', function(req,res){
  console.log('POST Done---------------')
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});