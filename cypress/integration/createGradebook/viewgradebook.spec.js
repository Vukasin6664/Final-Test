import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Home page Gradebook', function(){
    let comment = "Comment on someone's gradebook"
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

    it('Add comment on someone s else gradebook', function () {
        cy.contains('Next').should('be.visible').click()
        cy.contains('Previous').should('be.visible').click()
        cy.contains('Grade22').should('be.visible').click()
        cy.wait(1000)
        cy.get('.form-control').type(comment)
        cy.get('.btn').eq(4).click()
        cy.url().should('include', 'single-gradebook')
    })

    it.only('Delete comment someone s else gradebook', function(){
        cy.contains('Next').should('be.visible').click()
        cy.contains('Previous').should('be.visible').click()
        cy.contains('Grade22').should('be.visible').click()
        cy.get('.form-control').type(comment)
        cy.get('.btn').eq(4).click()
        cy.contains(comment).should('not.be.visible') //pogledati opet
    })
})