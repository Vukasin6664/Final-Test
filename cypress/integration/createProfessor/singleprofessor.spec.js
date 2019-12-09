import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Single Professor', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

    it('Single Professor', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(0).click()
        cy.contains('Zoran').click()
    })
})