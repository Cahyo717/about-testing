const Page = require('./page')

class ButtonPage extends Page {
    get button() {
        return $(`.show li:nth-of-type(5)`);
    }

    get doubleClick(){
        return $(`//button[@id='doubleClickBtn']`);
    }

    get messageDoubleClick(){
        return $('#doubleClickBtn');
    }

    get clickMe(){
        return $(`//button[.='Click Me']`);
    }

    get messageClickMe(){
        return $('#dynamicClickMessage');
    }

    get rightClickMe(){
        return $(`//div[.='Right Click Me']`)
    }

    get messageRightClickMe(){
        return $('#rightClickMessage');
    }

   

    async clickButton(){
        await this.button.scrollIntoView()
        await this.button.click()
        // await browser.pause(5000);
    }

    async buttonDoubleClick(){
        await this.doubleClick.click()
    }

    async buttonRightClick(){
        await this.buttonDoubleClick.click()
    }

    async buttonClickMe(){
        await this.clickMe.scrollIntoView({
            block : 'center',
            inline : 'center'
        })
        await this.clickMe.click();
    }

    async buttonDoubleClick_Message(){
        expect(await this.messageDoubleClick.getText()).toEqual('You have done a right click')
    }

    async buttonRightClick_Message(){
        expect(await this.messageRightClickMe.getText()).toEqual('You have done a right click')
    }
    
    async buttonClickMe_Message() {
        expect(await this.messageClickMe.getText()).toEqual('You have done a dynamic click');
    }

    open() {
        return super.open('elements')
    }

}

module.exports = new ButtonPage()