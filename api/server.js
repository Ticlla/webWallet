var express = require('express');
var app = express();
var wallet = require('../src/wallet.js');
var wallet_test = new wallet();


app.get('/getBalance', function(req, res) {
  response = {
    balance : wallet_test.getBalance()
  }
  res.end(JSON.stringify(response));

});

app.get('/initiate/:balance', function(req, res) {
  wallet_test.setBalance(req.params.balance)
  response = {
    balance : wallet_test.getBalance()
  }
  res.end(JSON.stringify(response));

});

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});



app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});