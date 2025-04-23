/// <reference types="Cypress" />
describe('Scroll Into View and Scroll To', () => {
    it('Scrolls Demo', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.scrollTo('bottom')
      cy.scrollTo('top')
      cy.get('.visit > :nth-child(2) > a').scrollIntoView()
    })
  })