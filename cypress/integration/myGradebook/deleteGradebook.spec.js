import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'
describe('Delete Gradebook', function(){
  
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

      it('Delete My Gradebook Page', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(1).click()
        cy.url().should('include', 'gradebooks')
        cy.contains('My own Gradebook').should('not.be.visible')
    })
})