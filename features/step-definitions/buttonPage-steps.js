const {Given, When, Then} = require('@wdio/cucumber-framework');
const { clickMe } = require('../pageobjects/buttons-page');
const ButtonPage = require('../pageobjects/buttons-page');
const HomePage = require('../pageobjects/home-page');


Given(/^I am on the front page$/, async() => {
    await ButtonPage.open()
})

When(/^I do click$/, async() => {
    // Write code here that turns the phrase above into concrete actions
    await ButtonPage.clickButton()
    await ButtonPage.buttonClickMe()
    await ButtonPage.buttonClickMe_Message()
  })

When (/^I do the right click$/, async() => {
   
})

When (/^I do double click$/, async() => {
    await frontPage.login(username, password);
})



