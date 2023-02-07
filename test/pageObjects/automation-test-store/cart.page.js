import BasePage from "../webdriver-university/base.page";

class cartPage extends BasePage{
    get shippingRate(){
        return $("//span[text()='Flat Shipping Rate:']/../following-sibling::td");
    }

    get total(){
        return $("//span[text()='Total:']/../following-sibling::td");
    }
}

export default new cartPage();