export class ConfirmPage

{
    company=".card-title"
    pricePerDay=".card-text:nth(0)"
    loacation=".card-text:nth(1)"
    licensePlate=".card-text:nth(2)"
    pickupDate="h6:nth(0)"
    dropoffDate="h6:nth(1)"
    rentButton=".btn"

    checkIfDetailsOfAnCarAreDisplayed()
    {
        cy.get(this.company, { timeout: 1000 }).should('be.visible').contains('Company:')
        cy.get(this.pricePerDay, { timeout: 1000 }).should('be.visible').contains('Price per day:')
        cy.get(this.loacation, { timeout: 1000 }).should('be.visible').contains('Location:')
        cy.get(this.licensePlate, { timeout: 1000 }).should('be.visible').contains('License plate:')
        cy.get(this.pickupDate, { timeout: 1000 }).should('be.visible').contains('Pickup date:')
        cy.get(this.dropoffDate, { timeout: 1000 }).should('be.visible').contains('Dropoff date:')

    }
    
    clickRentButton()
    {
        cy.get(this.rentButton).click()
    }

}