import BasePage from "./base.page";

class homePage extends BasePage {
    open() {
        return super.open();
    }

    get inputSearch(){
        return $('//input[@type="text"]');
    }

    get submitButton(){
        return $('//button[@type="submit"]');
    }

    async submitSearch(input){
        await this.inputSearch.setValue(input);
        await this.submitButton.click();
    }
}
export default new homePage();