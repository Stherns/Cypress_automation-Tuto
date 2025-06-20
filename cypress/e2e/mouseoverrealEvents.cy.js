/// <reference types="Cypress" />
describe('Handling dropdown', () => {
    it('Static dropdown', () => {
      cy.visit('http://livraison3.testacademy.fr/')
      cy.get('.login-register > :nth-child(1) > a').click()
      cy.get('input[placeholder="Nom d\'utilisateur ou email"]').type('stherns')
      cy.get("input[name='password']").type('stherns')
      cy.get('.homey_login_button').click()

      cy.get('.account-loggedin').realHover()
      cy.contains('li', 'Tableau de bord').realHover()
      // cy.contains('li', 'Tableau de bord').click()
      cy.contains('li', 'Profil').realHover()
      // cy.contains('li', 'Profil').click()
      cy.contains('li', 'Voyages').realHover()
      // cy.contains('li', 'Voyages').click()
      cy.contains('li', 'Portefeuille').realHover()
      // cy.contains('li', 'Portefeuille').click()
      cy.contains('li', 'Favoris').realHover()
      // cy.contains('li', 'Favoris').click()
      cy.contains('li', 'Factures').realHover()
      // cy.contains('li', 'Factures').click()
      cy.contains('li', 'Messages').realHover()
      // cy.contains('li', 'Messages').click()
      cy.contains('li', 'Se déconnecter').realHover()
      cy.contains('li', 'Se déconnecter').click()
    })
  })