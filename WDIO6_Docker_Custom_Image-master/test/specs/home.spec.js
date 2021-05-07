const homepage = require('../pageobjects/home.po')
const basePage = require('../global/globalaction.po')



describe("Home page  feature suite", ()=> {

    it("Test home page is displaying all the links and videos", ()=>{
       
         homepage.navigateCK();
         homepage.verifysvgIconsList();
         homepage.verifyHomepage();
         homepage
         console.log("First test passed");

    });
});