class BasePage {

    navigateCK() {
        browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`);
        browser.maximizeWindow();
        this.Cookie.waitForDisplayed({ timeout: 5000 });
        this.Cookie.click();

    }   
    
    navigate() {
        browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`);
        browser.maximizeWindow();
    }

}

module.exports = new BasePage();