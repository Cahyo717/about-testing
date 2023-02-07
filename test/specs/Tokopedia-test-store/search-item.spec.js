import homePage from "../../pageObjects/Tokopedia-test-store/home.page";

describe('Search item on tokopedia', () => {
    beforeEach(async ()=>{
        await browser.url("https://www.tokopedia.com/");
    })
    it ("Search specific product", async() => {

        await homePage.submitSearch("Laptop Lenovo"); 
        await browser.pause(5000);
        
    });
});