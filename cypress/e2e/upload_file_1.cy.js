/// <reference types="Cypress" />
describe('Select File or Upload File', () => {
    it('Select File or Upload file demo', () => {
      cy.visit('https://www.zoho.com/books/accounting-software-demo/#/settings/preferences/branding')
      // cy.get("input[type='file']").scrollIntoView()
      cy.get("input[type='file']").selectFile('/Users/SthernSmith/Downloads/DJHERY portfolio-getting-started-assets-main/portfolio-template-html-css-js/imgs_blogs/djhery_photo_preview.jpeg')
    })
  })