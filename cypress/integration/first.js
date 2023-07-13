/// <reference types="cypress" />

describe("E2E - Home Page", () => {

    it("Should open Home Page", () => {
        cy.visit("http://qalab.pl.tivixlabs.com/")
    })
})