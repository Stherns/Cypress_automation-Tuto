/// <reference types="Cypress" />
describe('Handling dropdown', () => {
    it('Static dropdown', () => {
      cy.visit('http://livraison3.testacademy.fr/')
      cy.get('.login-register > :nth-child(1) > a').click()
      
      cy.get('input[placeholder="Nom d\'utilisateur ou email"]').type('stherns')
      // cy.get("input[placeholder=\"Nom d'utilisateur ou email\"]").type('stherns')
      // cy.get('input[placeholder="Nom d\'utilisateur ou email"][name="username"]').type('stherns')
      // cy.get("input[placeholder=\"Nom d'utilisateur ou email\"][name=\"username\"]").type('stherns')

      // cy.get("input[name='password']").type('stherns')
      cy.get("input[placeholder='Mot de passe'][name='password']").type('stherns')
      
      cy.get('.homey_login_button').click()
      
      // cy.get('.account-loggedin').trigger('mouseover')
      cy.contains('.account-dropdown').invoke('show')
      cy.contains('li', 'Tableau de bord').trigger('mouseover')
      // cy.contains('li', 'Tableau de bord').click()
      cy.contains('li', 'Profil').trigger('mouseover')
      // cy.contains('li', 'Profil').click()
      cy.contains('li', 'Voyages').trigger('mouseover')
      // cy.contains('li', 'Voyages').click()
      cy.contains('li', 'Portefeuille').trigger('mouseover')
      // cy.contains('li', 'Portefeuille').click()
      cy.contains('li', 'Favoris').trigger('mouseover')
      // cy.contains('li', 'Favoris').click()
      cy.contains('li', 'Factures').trigger('mouseover')
      // cy.contains('li', 'Factures').click()
      cy.contains('li', 'Messages').trigger('mouseover')
      // cy.contains('li', 'Messages').click()
      cy.contains('li', 'Se déconnecter').trigger('mouseover')
      cy.contains('li', 'Se déconnecter').click()
    })
  })