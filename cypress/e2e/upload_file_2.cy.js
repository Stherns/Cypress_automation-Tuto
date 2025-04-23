/// <reference types="Cypress" />
describe('Select File or Upload File', () => {
    it('Select File or Upload file demo', () => {
      cy.visit('https://www.zoho.com/books/accounting-software-demo/#/settings/openingbalance/setup')
      cy.get('.ember-view.btn.btn-sm.btn-primary').click()
      // Option directly from the file input
      cy.get("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").selectFile('/Users/SthernSmith/Downloads/DJHERY portfolio-getting-started-assets-main/portfolio-template-html-css-js/imgs_blogs/djhery_photo_preview.jpeg') //Choose File
      cy.get('.btn > .d-flex').click() //Delete Uploaded File
      cy.get("div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click() // Option bar
      cy.get("button[type='button'] input[type='file']").selectFile('/Users/SthernSmith/Downloads/DJHERY portfolio-getting-started-assets-main/portfolio-template-html-css-js/imgs_blogs/djhery_photo_preview.jpeg') //Attach From Desktop
      cy.get('.btn > .d-flex').click() //Delete Uploded File
      cy.get("div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click() // Option bar
      cy.get('.dropdown-menu > :nth-child(3)').click() // Attach From Documents
      // cy.get('.btn-toolbar > .btn-secondary').click() // Cancel Attach From Documents
      cy.get(".ember-view input[type='radio']").check() // Select Document]')
      cy.get("div[class='btn-toolbar'] button[type='submit']").click() // Submit Attachment
      cy.get('.btn > .d-flex').click() //Delete Attached File
      cy.get("div:nth-child(2) > div:nth-child(1) > button:nth-child(2)").click() // Option bar
      cy.get("div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click() // Attach From Cloud


      // cy.get('.item-focus').click()
      // cy.get('.dropdown-menu > :nth-child(3)').check()
      // cy.get('#ember576').check()
    })
  })