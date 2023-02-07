import homePage from "../../pageObjects/automation-test-store/home.page";
import SkinCarePage from "../../pageObjects/automation-test-store/skincare.page";

describe('add items to basket', () => {
    beforeEach(async ()=>{
        await browser.url("https://automationteststore.com/");
    })
    it ("add specific 'skincare product' to basket & validate cart total", async() => {
        await homePage.open();

        await homePage.CategoryMenuComponent.categoryMenuLink('Skincare')[1].click()
        
        await SkinCarePage.addSpecificItems_ValidateTotal("creme precieuse nuit 50ml" , "total moisture facial cream");

        //"creme precieuse nuit 50ml"
        //"total moisture facial cream"
        

    });
});