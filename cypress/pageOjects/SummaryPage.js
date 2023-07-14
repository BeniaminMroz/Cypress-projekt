export class SummaryPage

{
    name="#name"
    lastName="#last_name"
    cardNumber="#card_number"
    email="#email"
    rentButton=".btn"
    alert=".alert"

    enterName(userName)
    {
        cy.get(this.name).clear().type(userName)
    }
    
    enterLastName(userLastName)
    {
        cy.get(this.lastName).clear().type(userLastName)
    }

    enterCardNumber(userCardNumber)
    {
        cy.get(this.cardNumber).clear().type(userCardNumber)
    }
    
    enterEmail(userEmail)
    {
        cy.get(this.email).clear().type(userEmail)
    }

    clickCompleteRent()
    {
        cy.get(this.rentButton).click()
    }

    checkIfCarIsRentedMessage()
    {
        cy.get(this.alert, { timeout: 1000 }).invoke("text").should("be.eq", "Success")
    }
}