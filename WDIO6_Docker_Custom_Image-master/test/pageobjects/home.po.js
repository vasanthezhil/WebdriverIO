
class LoginPage {

    //Define locators by using getters.
    get pageTitle() {return $("//div[@class='_SiteNav-a _SiteNav-at _SiteNav-au _SiteNav-av']")}
    get carsclick() {return $("//span[normalize-space()='Cars']")}
    
    get Speedcap() { return $('div[class="ay bx by bz f fq fr fs ft fu fv q"] div:nth-child(1) div:nth-child(2) em:nth-child(1)') }
    get highwaypilot() { return $("//*[local-name()='svg' and @data-icon='highway']") }
    get key() { return $("//*[local-name()='svg' and @data-icon='camera2']") }
    get camera() { return $("//*[local-name()='svg' and @data-icon='key']") }
    get Socialmedia() { return $('=Social Media') }
    get carsafety() { return $('a[data-autoid="iconCallouts:cta"]') }
    get Cookie() { return $("//*[@title='Accept']") }
    get smallvolvologo() { return $("//*[@data-autoid='nav:siteNavLogoSmall']") }
    
    //function to encapsulate the Home Page Cookies and check the  functionality of home  page
      


        //function to verify wether user can see accounts overview title after successful login
        verifyDashboard(accOverviewHeader) {
            console.log("Text: "+this.accountsOverviewTitle.getText());
            expect(this.accountsOverviewTitle).toHaveTextContaining(accOverviewHeader);
        }
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
        verifyHomepage(pageTitle) {
            this.carsclick.click();
        }
        
        verifyclick(){
            this.carsclick.click();
        }

        verifylogo(){
            this.smallvolvologo.waitForDisplayed({ timeout: 5000 });
        }

        verifysvgIconsList(){
            
            this.smallvolvologo.waitForDisplayed({ timeout: 5000 });
            this.Speedcap.waitForDisplayed({ timeout: 5000 });
            this.Speedcap.scrollIntoView();
            this.camera.waitForDisplayed({ timeout: 5000 });
            this.highwaypilot.waitForDisplayed({ timeout: 5000 });
            this.key.waitForDisplayed({ timeout: 5000 });
        }
}
module.exports = new LoginPage();