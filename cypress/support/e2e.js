import './commands'
import './cypress.json'
import "cypress-localstorage-commands"
import 'cypress-mochawesome-reporter/register'


require('cypress-xpath')

beforeEach(() => {
    // cy.restoreLocalStorage()
    cy.visit(baseUrl)
  })

  afterEach(() => {
    // cy.saveLocalStorage()
  })