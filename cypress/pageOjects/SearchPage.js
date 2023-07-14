export class SearchPage

{
    city="#city"
    model="#model"
    pickup="#pickup"
    dropoff="#dropoff"
    searchButton=".btn"
    alert=".alert"

    selectCity(cityName)
    {
        cy.get(this.city).select(cityName)
    }

    selectModel(modelName)
    {
        cy.get(this.model).clear().type(modelName)
    }

    selectPickupDate(pickupDate)
    {
        cy.get(this.pickup).clear()
        cy.get(this.pickup).type(pickupDate)
    }

    selectDropoffDate(dropoffDate)
    {
        cy.get(this.dropoff).clear()
        cy.get(this.dropoff).type(dropoffDate)
    }

    clickSearchButton()
    {
        cy.get(this.searchButton).click()
    }

    checkPleaseFillPickupAndDropOffDatesMessageAppears()
    {
        cy.get(this.alert, { timeout: 1000 }).invoke("text").should("be.eq", "Please fill pickup and drop off dates")
    }

}