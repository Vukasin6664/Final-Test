import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'
describe('Edit Gradebook', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

      it('Add student to My Own Gradebook', function(){
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(2).click()
        cy.get('input[id="title"]').type(" 123")
        cy.get('select').select('shhh shhh')
        cy.get('.btn').eq(0).click()
        cy.url().should('include', 'gradebooks')
        cy.contains('My Own Gradebook123').should('be.visible')
      })
})