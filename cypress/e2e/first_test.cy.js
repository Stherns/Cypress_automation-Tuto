/// <reference types="Cypress" />
describe('Launch Application', () => {
    it('Launch the test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get("input[name='username']").type('testuser')
      cy.get("input[name='password']").type('testpassword')
    })
  })

// node_modules/.bin/cypress run (add to teminal to run in headless mode)
// node_modules/.bin/cypress run -s cypress/e2e/firsttest.cy.js --headed -b chrome (add to teminal to run in headed mode with chrome browser)