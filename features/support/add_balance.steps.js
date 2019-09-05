const { Given, When,Then } = require('cucumber')
const { expect } = require('chai')
const { Builder, By, Key, until } = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('user lands on home page',async function () {
    // Write code here that turns the phrase above into concrete actions
    chromeDriver = await new Builder().forBrowser('chrome').build();
    await chromeDriver.get('http://localhost:3000/');
});


Then('user checks there is {string} in place', async function (expected) {
    await chromeDriver.findElement(By.id('Balance'))
    .getText().then(function (text) {
      showText = text;
    });
    expect(showText).to.eql(expected);


});


Then('provides {int} balance to add', async function (balanceToAdd) {
    // Write code here that turns the phrase above into concrete actions
    await chromeDriver.findElement(By.id('balanceToAdd')).sendKeys(balanceToAdd);

  });

  When('user submit {string}',async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await chromeDriver.findElement(By.id('addButton')).click();
  });