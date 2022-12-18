const Page = require('./page')

class HomePage extends Page {

    get elements(){
        return $(`//h5[text()="Elements"]`)
    }

    get Interactions(){
        return $(`//h5[text()="Interactions"]`)
    }

    async chooseBtnElements() {
        await this.elements.scrollIntoView({block : 'center'});
        await this.elements.click();
    }

    async chooseBtnInteracts(){
        await this.Interactions.scrollIntoView({block : 'center'});
        await browser.pause(2000)
        await this.Interactions.click();
       
    }

    async open(path) {
        return super.open(path)
    }

} 

module.exports = new HomePage();