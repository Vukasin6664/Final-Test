import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'
describe('Create Gradebook', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })

    it('Create Gradebook for Newly Created Professor', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(2).click()
        cy.get('input[id="title"]').type("Nadezda's Gradebook")
        cy.get('select').select('Nadezda Novakovic')
        cy.get('.btn').click()
        cy.url().should('include', 'gradebooks')
    })

    it('Create Gradebook for Logged in User', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(2).click()
        cy.get('input[id="title"]').type("My Own Gradebook")
        cy.get('select').select('Mileva Maric') 
        cy.get('.btn').click()
        cy.url().should('include', 'gradebooks')

    })
    it('Create Gradebook with one character in gradebook title field', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(2).click()
        cy.get('input[id="title"]').type("B")
        cy.get('select').select('Nadja 71l6dse')
        cy.get('.btn').click()
        cy.get('.alert-danger').contains("Message: The given data was invalid.").should('be.visible')
    })

    it('Create Gradebook with empty gradebook title ', function() {
            cy.wait(1000)
            cy.get('.nav-link').eq(2).click()
            cy.get('select').select('Nadja 71l6dse')
            cy.get('.btn').click()
            cy.get('.alert-danger').contains("Message: The given data was invalid.").should('be.visible')
    }) 

    it('Create Gradebook with empty professor ', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(2).click()
        cy.get('input[id="title"]').type("teest")
        cy.get('.btn').click()
        cy.get('.alert-danger').contains("Message: The given data was invalid.").should('be.visible')
    }) 

    it('Create Gradebook with 255+ character in gradebook title field', function() {
        cy.wait(1000)
        cy.get('.nav-link').eq(2).click()
        cy.get('input[id="title"]').type("I’ve often thought of sports as story generators, the excitement in any sport comes from engagement in the narrative behind the gameplay. The footballing event that will be most remembered from the 2010s will most likely be the Premier. I’ve often thought")
        cy.get('select').select('Milica Mirkovic')
        cy.get('.btn').click()
        cy.url().should('include', 'gradebooks')
    })

    })

    after(()=>{
        cy.clearLocalStorage();
    })
