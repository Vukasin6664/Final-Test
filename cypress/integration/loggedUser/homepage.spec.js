import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Home page Gradebook', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

    it.only('TC 1 - Home page : Pagination', function () {
        cy.contains('Next').should('be.visible').click()
        cy.contains('Previous').should('be.visible').click()
        cy.contains('dnevnik11').should('be.visible')
    })
    
    it('Tc 2 - Home page - filter', function() {
        cy.wait(1000)
        cy.get('.form-control').type("gradjevina")
        cy.get('.btn').eq(0).click()
        cy.contains('Gradjevina 123').should("be.visible")   
    })

    after(()=>{
        cy.clearLocalStorage();
    })
})