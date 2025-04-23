/// <reference types="Cypress" />
describe('Account Software Demo', () => {
    it('Organization Profile', () => {
      cy.visit('https://www.zoho.com/books/accounting-software-demo/#/settings/orgprofile')
      cy.get("input[type='file']").selectFile('/Users/SthernSmith/Downloads/DJHERY portfolio-getting-started-assets-main/portfolio-template-html-css-js/imgs_blogs/djhery_photo_preview.jpeg') // Upload File
      cy.get('.modal-footer > .btn-secondary').click() // Cancel
      cy.get("input[class='form-control ember-text-field ember-view']").type("{selectall}{backspace} Djhery_MOUSSAVOU Corporation") // Organization Name
      // cy.get("input[class='form-control ember-text-field ember-view']").clear().type("Djhery Corporation") // Organization Name
      cy.get("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").clear().type("Entertainment") // Industry
      cy.get("div[class='form-group row'] span[class='flex-grow-1 me-0']").click() // Organization Location
      
      // cy.get("div[class='form-group row'] span[class='flex-grow-1 me-0").type('Canada') // Type "Canada" in the search box
      // cy.contains('div', 'Canada').click(); // Select "Canada" option from the dropdown
      
      cy.contains('div', 'Gabon').click(); // Select any "Country" from the dropdown
      cy.get("div[class='form-group row'] span[class='flex-grow-1 me-0']").should('contain.text', 'Gabon'); // Vérification optionnelle : le texte sélectionné s'affiche

      cy.get("input[placeholder='Website URL']").type("www.sthersmith.com") // Website URL
      cy.get(".toggle-button.ember-view.align-text-top").click() // Toggle Button
      cy.get("textarea[placeholder='You can enter a maximum of 255 characters']").type("09 Allee de Maurice Thorez 91300, Massy, France") // Payment Stub Address
      
      // cy.get("div[class='ac-selected.form-control.'] span[class='flex-grow-1 me-0']").click()
      
      cy.get("div[class='col-lg-3'] span[class='flex-grow-1 me-0']").click() // Fiscal Year
      // cy.contains('span', 'January - December').click(); // Select any "Country" from the dropdow
      // cy.contains('span', 'June - May').click(); // Select any "Country" from the dropdown
      // cy.get('.ac-dropdown-results > :nth-child(4)').click() //
      cy.get('.active > a > .autocomplete-option > .option').click()
      
    })
  })