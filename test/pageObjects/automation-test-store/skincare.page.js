import BasePage from "../webdriver-university/base.page";
import ItemComponent from "../automation-test-store/components/item.comp";
import headerNavComponent from "../automation-test-store/components/header-nav.comp";
import cartPage from "../automation-test-store/cart.page";


class SkinCarePage extends BasePage{
    get itemComponent(){
        return ItemComponent;
    }

    async addSpecificItems_ValidateTotal(item1, item2){
        const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;

        const itemPrices = [];

        for (const Header of skincareProducts_Header_Links){
            const tempHeaderText = await Header.getText();
            if(tempHeaderText.toLowerCase() == item1.toLowerCase() || tempHeaderText.toLowerCase() == item2.toLowerCase()){
                const attr = await Header.getAttribute("href");
                console.log(attr);
                const itemId = attr.split("id=").pop();
                console.log(itemId);
                await $('//a[@data-id="' + itemId + '"]').click();

                itemPrices.push(
                    await $("//a[@data-id='" + itemId + "']/following-sibling::div/div[@class='pricenew']" + "| //a[@data-id='" + itemId + "']/following-sibling::div/div[@class='oneprice']").getText()
                ); 

            }
            const formattedItemPrices = [];

            itemPrices.forEach((price) => {
                formattedItemPrices.push(price.replace("$" , ""));
            });

            var itemTotal = 0;
            formattedItemPrices.forEach(price => itemTotal += parseFloat(price));
            console.log("Items Total :" + itemTotal);
        }
        await headerNavComponent.cartLink.click();
        await expect(browser).toHaveUrlContaining("checkout");

        var TempShippingRate = await cartPage.shippingRate.getText();
        var ShippingRate = TempShippingRate.replace('$', '');
        itemTotal = itemTotal + parseFloat(ShippingRate);
        console.log("Items Total + Shipping Rate:" + itemTotal);
        var cartTotal = await cartPage.total.getText();
        cartTotal = cartTotal.replace('$', '');
        await expect(itemTotal).toEqual(parseFloat(cartTotal));
        await browser.pause(5000);
    }
}


export default new SkinCarePage();
