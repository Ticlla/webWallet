
const { Given, When,Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

var wallet = require('../../src/wallet.js');
var wallet_test = new wallet();

let httpOptions = {};
let walletResponse = undefined;


Given('Request is prepared with {string} to {string}',function(type, resourse){
    httpOptions = {
        method: type,
        uri: 'http://localhost:3000/' + resourse,
        json: true,
        resolveWithFullResponse: true,
        body:{}
    }
    // console.log(httpOptions)
});


When('request is performed',  async function(){
    await httpClient(httpOptions)
    .then(function(response) {
        walletResponse = response;
    })
    .catch(function(error) {
        walletResponse = error;
    });

    // console.log(walletResponse.body);

});

Then('I receive response http with {int}', function (httpStatus) {
    // Write code here that turns the phrase above into concrete actions
    expect(walletResponse.statusCode).to.eql(httpStatus);
});


Then('Balance should be {int}', function (balance) {
    // Write code here that turns the phrase above into concrete actions
    expect(parseInt(walletResponse.body.balance)).to.eql(balance);
  });