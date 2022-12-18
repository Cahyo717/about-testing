const {Given, When, Then} = require('@wdio/cucumber-framework');
const homePage = require('../pageobjects/home-page');


Given(/^I am on the front page$/, async() => {
    await homePage.open('https://demoqa.com/');
    // await ButtonPage.clickElements();
})


When('I choose element', async() => {
    // Write code here that turns the phrase above into concrete actions
    await homePage.chooseBtnElements()
  })


When(/^I choose interactions$/, async() => {
    // Write code here that turns the phrase above into concrete actions
    await homePage.chooseBtnInteracts()
})
