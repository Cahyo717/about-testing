const {Given, When, Then} = require('@wdio/cucumber-framework');
const ButtonPage = require('../pageobjects/buttons-page');
const homePage = require('../pageobjects/home-page');


When(/^I click button element$/, async() => {
    // Write code here that turns the phrase above into concrete actions
    await homePage.chooseBtnElements()
    await ButtonPage.clickButton()
    await ButtonPage.buttonClickMe()
    await ButtonPage.buttonClickMe_Message()
  })

When('I click buttons', async() => {
    // Write code here that turns the phrase above into concrete actions
    await ButtonPage.clickButton();
  })
  
When (/^I click "Right Click"$/, async() => {
   await ButtonPage.buttonRightClick()
   await ButtonPage.buttonRightClick_Message()
})

When (/^I click "Double Click"$/, async() => {
    await ButtonPage.buttonDoubleClick()
    await ButtonPage.buttonDoubleClick_Message()
})


When (/^I click "click me"$/, async() => {
  await ButtonPage.buttonClickMe()
  await ButtonPage.buttonClickMe_Message()
})




