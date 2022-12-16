const {Given, When, Then} = require('@wdio/cucumber-framework');
const ButtonPage = require('../pageobjects/buttons-page');
const homePage = require('../pageobjects/home-page');


Given(/^I am on the front page$/, async() => {
    await homePage.open('https://demoqa.com/');
    // await ButtonPage.clickElements();
})

When(/^I click button element$/, async() => {
    // Write code here that turns the phrase above into concrete actions
    await homePage.chooseBtnElements()
    await ButtonPage.clickButton()
    await ButtonPage.buttonClickMe()
    await ButtonPage.buttonClickMe_Message()
  })

When (/^I do the right click$/, async() => {
   await ButtonPage.buttonRightClick()
   await ButtonPage.buttonRightClick_Message()
})

When (/^I do double click$/, async() => {
    await frontPage.login(username, password);
})



