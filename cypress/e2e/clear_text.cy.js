/// <reference types="Cypress" />
describe('Clear Text', () => {
    it('Clear text demo', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get("input[name='username']").type('stherns_test')
      // cy.get("input[name='username']").clear()
      cy.get("input[name='username']").type('{selectall}{backspace}')
    })
  })