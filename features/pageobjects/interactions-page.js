const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    btnOnElements(_btn) {

        return $(`//span[.='${_btn}']`);
    }

    get elementDrag(){
        return $(`#draggable`)
    }
    get elementDrop(){
        return $(`#droppable`)
    }
    
    get droppedText(){
        return $(`#simpleDropContainer p`)
    }


    async actionBtnClick(btnName) {
        await this.btnOnElements(btnName).waitForClickable();
        await this.btnOnElements(btnName).click();
    }

    async actionbtnInteract() {
        await this.btnInteract.scrollIntoView({ block: 'center', inline: 'center' });
        await this.btnInteract.click();
    }

    async dragingAndDrop(){
   
        await this.elementDrag.scrollIntoView({ block: 'center', inline: 'center' })
        await this.elementDrag.dragAndDrop( await this.elementDrop);
        // await browser.pause(5000)
    }

    async verifyDroped(){
        // expect(await this.droppedText().getText()).toEqual("Dropped!")
    console.log(await this.elementDrop.getCSSProperty('color'));
    }
}

module.exports = new ElementsPage();