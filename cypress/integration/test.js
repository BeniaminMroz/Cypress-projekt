///// <reference types="cypress" />
//import 'cypress-file-upload';

 import { SearchPage } from "../pageOjects/SearchPage";
 import { ChoosePage } from "../pageOjects/ChoosePage";
 import { SummaryPage } from "../pageOjects/SummaryPage";
 import { ConfirmPage } from "../pageOjects/ConfirmPage";
 
 const searchPage = new SearchPage()
 const choosePage = new ChoosePage()
 const summaryPage = new SummaryPage()
 const confirmPage = new ConfirmPage()

describe("E2E - Home Page", () => {
    


    beforeEach(() => {
        // cy.restoreLocalStorage()
        cy.visit("http://qalab.pl.tivixlabs.com")
      })
    
      afterEach(() => {
        // cy.saveLocalStorage()
      })


    it("As an user I would like to rent a car", () => {

       searchPage.selectCity("Paris")
       searchPage.selectModel("Toyota")
       searchPage.selectPickupDate("2023-10-08")
       searchPage.selectDropoffDate("2023-10-20")
       searchPage.clickSearchButton()

       choosePage.rentFirstCarFromTheList()

       confirmPage.clickRentButton()

       summaryPage.enterName("Beniamin")
       summaryPage.enterLastName("Mróz")
       summaryPage.enterCardNumber("4001919257537193")
       summaryPage.enterEmail("beniamin.mroz@gmail.com")
       summaryPage.clickCompleteRent()
       summaryPage.checkIfCarIsRentedMessage()

    })

    it("Verify if to rent a car, the user needs to provide dates", () => {

      searchPage.selectCity("Paris")
      searchPage.selectModel("Toyota")
      searchPage.clickSearchButton()
      searchPage.checkPleaseFillPickupAndDropOffDatesMessageAppears()

    })

    it("As an user I would like verify details after picking a car", () => {

      searchPage.selectCity("Paris")
      searchPage.selectModel("Toyota")
      searchPage.selectPickupDate("2023-10-08")
      searchPage.selectDropoffDate("2023-10-20")
      searchPage.clickSearchButton()

      choosePage.rentFirstCarFromTheList()

      confirmPage.checkIfDetailsOfAnCarAreDisplayed()

    })

})