const cars = require("../pageobjects/cars.po");
const homepage = require('../pageobjects/home.po')
const basePage = require('../Global/base.actions.po')

describe("check cars page ", ()=> {

  
    it("Open Cars Page ", ()=>{
      homepage.navigateCK();
      cars.goToelectriccars();
    });

    it("check the Hybrid cars section", ()=> {
      homepage.navigate();
      cars.goTohybridcars();
    });

    it("check the Mild-Hybrid cars section", ()=> {
     homepage.navigate();
      cars.goTomildhybrid();
    });


})