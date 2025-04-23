/// <reference types="Cypress" />
describe('Handling dynamic dropdown', () => {
    it('Dynamic dropdown', () => {
      cy.visit('https://www.ethiopianairlines.com/fr', {headers: {"Accept-Encoding": "gzip, deflate" }})
      cy.get('#btnAcceptCookies').click()
      cy.get('.card > :nth-child(2) > .widget-input > .d-flex > .mx-3 > .widget-origin-placeholder-text').click().type('New', {delay: 200})
      cy.get(".dropdown-menu.show span:last-child").each(($el, index, $list) => {
        cy.log($el.text())
        // if ($el.text() === 'New') {
        // if ($el.text() === 'NEW') {
        // if ($el.text().includes('New York, United States')) {
        // if ($el.text().includes('New Orleans, United States')) {
        // if ($el.text().includes('Auckland, New Zealand')) {
        if ($el.text().includes('ALBUQUERQUE,')) {
            cy.wrap($el).click()
        }
      })
    })
  })