const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');
const interactionsPage = require('../pageobjects/interactions-page');
const DropablePage = require('../pageobjects/interactions-page');

When(/^I choose droppable$/, async () => {
    await interactionsPage.actionBtnClick("Droppable")
})

When(/^I interacting drag and drop$/, async () => {
    await interactionsPage.dragingAndDrop()
})

Then(/^Confirm droped on drop area$/,async()=>{
    await interactionsPage.verifyDroped()
    await browser.pause(3000);
})
