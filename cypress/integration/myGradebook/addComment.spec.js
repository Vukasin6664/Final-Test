import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'
describe('Add Comments', function(){

    let comment = "First comment"
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

    it('Add comments on My Gradebook Page', function(){
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.get('.form-control').type(comment)
        cy.get('.btn').eq(3).click()
        cy.get('.nav-link').eq(2).click()
        cy.get('.nav-link').eq(1).click()
        cy.url().should('include', 'my-gradebook')
        cy.contains(comment).should('be.visible')
    })

    it('Delete comments on My Gradebook Page', function(){
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(3).click()
        cy.contains(comment).should('not.be.visible')
    })
})