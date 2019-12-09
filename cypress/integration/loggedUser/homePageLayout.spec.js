import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Layout-logged in user', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })

    it('TC - 01 Layout-logged in user', function() {
       cy.contains("Sign out").should("be.visible")
       cy.contains("Gradebooks").should("be.visible")
       cy.contains("My Gradebook").should("be.visible")
       cy.contains("Create Gradebook").should("be.visible")
       cy.contains("Professor").should("be.visible")
       cy.contains("Sign in").should("not.be.visible")
    })

    after(()=>{
        cy.clearLocalStorage();
    })
})