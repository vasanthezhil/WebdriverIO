class Carspage {

    get electriccarslink(){ return $("//h2[normalize-space()='Electric']") };
    get hybridcarslink() { return $("//h2[normalize-space()='Hybrids']")}
    get mildhybridcarslink() { return $("//h2[normalize-space()='Mild hybrids']")}
    get carsclick() {return $("//span[normalize-space()='Cars']")}

    goToelectriccars() {
        this.carsclick.click();
        this.electriccarslink.waitForDisplayed({ timeout: 5000 });
        this.electriccarslink.click();
    }

    goTohybridcars() {
        this.carsclick.click();
        this.hybridcarslink.waitForDisplayed({ timeout: 5000 });
        this.hybridcarslink.click();
    }

    goTomildhybrid() {
        this.carsclick.click();
        this.mildhybridcarslink.click();
    }


    


}
module.exports = new Carspage();