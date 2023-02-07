export default class BasePage {
    open(path) {
        return browser.url(`https://www.webdriveruniversity.com/${path}`);
    }
}