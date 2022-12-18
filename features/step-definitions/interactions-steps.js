const {
    Given,
    When,
    Then
} = require('@wdio/cucumber-framework');

const DropablePage = require('../pageobjects/interactions-page');


// When(/^I choose interactions$/, async () => {
//     await DropablePage.actionbtnInteract();
// })


When(/^I choose droppable$/, async () => {
    await DropablePage.actionBtnClick("Droppable")
})

When(/^I interacting drag and drop$/, async () => {
    await DropablePage.dragingAndDrop()
})

Then(/^Confirm droped on drop area$/,async()=>{
    await DropablePage.verifyDroped()
    await browser.pause(3000);
})
