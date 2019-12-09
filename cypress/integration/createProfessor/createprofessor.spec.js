import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'

describe('Create Professor ', function(){
    let proffesorFirstName = 'Milica'
    let proffesorLastName = 'Mirkovic'
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })
    it('Create New Professors', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.url().should('include', 'create-professor')
        cy.get('input[id="firstName"]').type(proffesorFirstName)
        cy.get('input[id="lastName"]').type(proffesorLastName) 
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]').type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('[type="Submit"]').click()
        cy.wait(1000)
        cy.scrollTo("bottom").contains(proffesorLastName).should('be.visible')
    })

    it('List All Professors', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(0).click()
        cy.url().should('include', 'all-professor')
        cy.contains('FirstName').should("be.visible")
        cy.contains('LastName').should("be.visible")
        cy.contains('Picture').should("be.visible")
        cy.contains('Gradebook').should("be.visible")
    })

    it('Search All Professors', function(){
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(0).click()
        cy.url().should('include', 'all-professor')
        cy.get('.form-control').type(proffesorFirstName)
        cy.contains(proffesorFirstName).should("be.visible")

    })
    it('Create New Professor with 255+ characters firstname', function() {
        cy.wait(1000)
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.get('input[id="firstName"]').type('I’ve often thought of sports as story generators, the excitement in any sport comes from engagement in the narrative behind the gameplay. The footballing event that will be most remembered from the 2010s will most likely be the Premier. I’ve often thought')
        cy.get('input[id="lastName"]').type('Sretkovic')
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]').type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('[type="Submit"]').click()
        cy.contains('All Professors Page').should("be.visible")
    })
    it('Create New Professor with 255+ characters lastname', function() {
        cy.wait(1000)
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.get('input[id="firstName"]').type('Milica')
        cy.get('input[id="lastName"]').type('I’ve often thought of sports as story generators, the excitement in any sport comes from engagement in the narrative behind the gameplay. The footballing event that will be most remembered from the 2010s will most likely be the Premier. I’ve often thought')
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]').type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        cy.get('[type="Submit"]').click()
        cy.contains('All Professors Page').should("be.visible")
    })

    it('Create New Professor with no image', function() {
        cy.wait(1000)
        cy.get('.dropdown').click()
        cy.get('.dropdown-item').eq(1).click()
        cy.get('input[id="firstName"]').type('Milica')
        cy.get('input[id="lastName"]').type('Jaric')
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]')
        cy.get('[type="Submit"]').click()
        cy.get('.form-control').then(($input)=>{
            expect($input[0].validationMessage).to.eq("Please fill out this field.")
          })
    })
    after(()=>{
        cy.clearLocalStorage();
    })
})