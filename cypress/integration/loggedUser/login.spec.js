import { loginPage } from '../../page_object/login.page'

describe('Login Gradebook', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
      })
    
    it('Valid credentials login page', function(){
        loginPage.login("mileva@gmail.com","Test@12345")
        cy.url().should("include", "/login")
    })

    it('Invalid credentials login page', function(){
        loginPage.login("mileva123@gmail.com","Test@1234234")
        cy.url().should("include", "/login")
    })

    it('Empty email', function(){
        cy.get('input[name="password"]').type('Test@12345')
        cy.get('button[type=submit]').click()
        loginPage.email.then(($input)=>{
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
          })
    })

    it('Empty password', function(){
        cy.get('input[name="email"]').type('mileva@gmail.com')
        cy.get('button[type=submit]').click()
        loginPage.password.then(($input)=>{
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
          })
    })

    after(()=>{
        cy.clearLocalStorage();
    })
})