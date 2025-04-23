/// <reference types="Cypress" />
describe('Radio buttons functionality', () => {
    it('Radio buttons Demo', () => {
      cy.visit('https://www.zoho.com/books/accounting-software-demo/#/settings/preferences/recurringinvoices', {headers: {"Accept-Encoding": "gzip, deflate" }})
      cy.get("input[value='save_as_draft']").check()
      // cy.get('[type="radio"]').first().check() // Check first radio element
      cy.get("input[type='checkbox']").uncheck()
      cy.get("input[value='send_directly_to_customer']").check()
      cy.get("div:nth-child(2) > div:nth-child(1) > input:nth-child(1)").check()
      cy.get("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").check()
      
      // cy.get('[type="checkbox"]').check()
      cy.get('[type="checkbox"]').uncheck()
      // cy.get("input[type='checkbox']").uncheck()
      
      // Trial
      // cy.get(".ember-checkbox.ember-view.form-check-input").check()
      // cy.get('.form-check-label').check()
    })
  })