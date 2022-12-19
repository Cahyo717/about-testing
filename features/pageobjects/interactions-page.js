const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class InteractionsPage extends Page {
    /**
     * define selectors using getter methods
     */
    btnOnElements(_btn) {

        return $(`//span[.='${_btn}']`);
    }

    get drag(){
        return $(`#draggable`)
    }
    get drop(){
        return $(`#droppable`)
    }
    
    get droppedText(){
        return $(`#simpleDropContainer p`)
    }


    async actionBtnClick(btnName) {
        await browser.pause(2000)
        await this.btnOnElements(btnName).waitForClickable();
        await this.btnOnElements(btnName).click();
    }

    async actionbtnInteract() {
        await this.btnInteract.scrollIntoView({ block: 'center', inline: 'center' });
        await this.btnInteract.click();
    }

    async dragingAndDrop(){
   
        await this.drag.scrollIntoView({ block: 'center', inline: 'center' })
        await this.drag.dragAndDrop( await this.drop);
        // await browser.pause(5000)
    }

    async verifyDroped(){
        // expect(await this.droppedText().getText()).toEqual("Dropped!")
    console.log(await this.drop.getCSSProperty('color'));
    }
}

module.exports = new InteractionsPage();