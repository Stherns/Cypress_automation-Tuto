/// <reference types="Cypress" />
describe('Handling dropdown', () => {
    it('Static dropdown', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get("input[name='username']").type('stherns_test')
      cy.get("input[name='password']").type('stherns_test')
      cy.get("input[value='Log In']").click()
      cy.get("a[href='activity.htm?id=15009']").click()
      cy.get('#month').select(11)
      cy.get('#month').select('mars')
      cy.get('#month').select('mai')
      // cy.get("a[href='logout.htm']").click()
    })
  })