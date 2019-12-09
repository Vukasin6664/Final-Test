import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Create professor-images', function(){
    let proffesorFirstName = 'Sinisa'
    let proffesorLastName = 'Novakovic'
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })
    it('Create Professor with 2 images', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.url().should('include', 'create-professor')
        cy.get('input[id="firstName"]').type(proffesorFirstName)
        cy.get('input[id="lastName"]').type(proffesorLastName) 
        cy.get('.btn').eq(0).click()
        cy.get('.btn').eq(0).click()
        cy.get('.form-control').eq(0).type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('.form-control').eq(1).type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('[type="Submit"]').click()
        cy.wait(1000)
        cy.scrollTo("bottom").contains(proffesorLastName).should('be.visible')
    })

    it('Create Professor-swap images ', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.url().should('include', 'create-professor')
        cy.get('input[id="firstName"]').type(proffesorFirstName)
        cy.get('input[id="lastName"]').type(proffesorLastName) 
        cy.get('.btn').eq(0).click()
        cy.get('.btn').eq(0).click()
        cy.get('.form-control').eq(0).type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('.form-control').eq(1).type("test.jpg")
        cy.get('.btn').eq(5).click()
        cy.get('.btn').eq(3).click()
    })

    it('Create Professor-delete all images ', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.url().should('include', 'create-professor')
        cy.get('input[id="firstName"]').type(proffesorFirstName)
        cy.get('input[id="lastName"]').type(proffesorLastName) 
        cy.get('.btn').eq(0).click()
        cy.get('.btn').eq(0).click()
        cy.get('.form-control').eq(0).type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('.form-control').eq(1).type("test.jpg")
        cy.get('.btn').eq(4).click()
        cy.get('.btn').eq(1).click()
        cy.get('.form-control').eq(0).should("not.be.visible")
    })

    after(()=>{
        cy.clearLocalStorage();
    })
})