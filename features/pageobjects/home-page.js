const Page = require('./page')

class HomePage extends Page {

    get elements(){
        return $(`//div[.='Elements']`)
    }

    async chooseBtnElements() {
        await this.elements.scrollIntoView({block : 'center'})
        await this.elements.click();
    }

} 

module.exports = new HomePage();