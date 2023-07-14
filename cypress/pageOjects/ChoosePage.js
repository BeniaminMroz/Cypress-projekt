export class ChoosePage

{
    rentButton=".btn:nth(1)"

    rentFirstCarFromTheList()
    {
        cy.get(this.rentButton).click()
    }

}