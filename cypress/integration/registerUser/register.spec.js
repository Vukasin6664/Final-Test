import { registerPage } from '../../page_object/register.page'

describe('Register Gradebook', function(){

    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Register').click()
      })
    
    it('Gradebook app check Register', function(){
        registerPage.register("Mileva","Maric","Test@12345","Test@12345","mileva@gmail.com")
        cy.url().should("include", "gradebooks")
        cy.contains("Sign out").should('be.visible')
    })
    
    after(()=>{
        cy.clearLocalStorage();
    })
    it('Register to gradebook app with 255+ characters firstname', function() {
        cy.wait(1000)
        registerPage.firstName.type('I’ve often thought of sports as story generators, the excitement in any sport comes from engagement in the narrative behind the gameplay. The footballing event that will be most remembered from the 2010s will most likely be the Premier. I’ve often thought')
        registerPage.lastName.type('Maric')
        registerPage.password.type('Test@12345')
        registerPage.passwordConfirmation.type('Test@12345')
        registerPage.email.type('mileva@gmail.com')
        registerPage.termsAndConditions.click()
        registerPage.submit.click()
    })

    it('Register to gradebook app with 255+ characters lastname', function() {
        cy.wait(1000)
        registerPage.firstName.type('Mileva')
        registerPage.lastName.type('I’ve often thought of sports as story generators, the excitement in any sport comes from engagement in the narrative behind the gameplay. The footballing event that will be most remembered from the 2010s will most likely be the Premier. I’ve often thought')
        registerPage.password.type('Test@12345')
        registerPage.passwordConfirmation.type('Test@12345')
        registerPage.email.type('mileva@gmail.com')
        registerPage.termsAndConditions.click()
        registerPage.submit.click()
    })
    
    it('Empty Password', function(){
        registerPage.firstName.type('Mileva')
        registerPage.lastName.type('Maric')
        registerPage.passwordConfirmation.type('Test@12345')
        registerPage.email.type('mileva@gmail.com')
        registerPage.termsAndConditions.click()
        registerPage.submit.click()
    })
    it('Less than 8 characters password', function(){
        registerPage.firstName.type('Mileva')
        registerPage.lastName.type('Maric')
        registerPage.password.type('Test')
        registerPage.passwordConfirmation.type('Test@12345')
        registerPage.email.type('mileva@gmail.com')
        registerPage.termsAndConditions.click()
        registerPage.submit.click()
        registerPage.password.then(($input)=>{
            expect($input[0].validationMessage).to.eq("Please match the requested format.")
          })
    })
    it('Greater than 8 characters but no numbers password', function(){
        registerPage.firstName.type('Mileva')
        registerPage.lastName.type('Maric')
        registerPage.password.type('TestTest')
        registerPage.passwordConfirmation.type('TestTest')
        registerPage.email.type('mileva@gmail.com')
        registerPage.termsAndConditions.click()
        registerPage.submit.click()
        registerPage.password.then(($input)=>{
            expect($input[0].validationMessage).to.eq("Please match the requested format.")
          })
    })

    it('Invalid email type', function() {
        cy.wait(1000)
        registerPage.firstName.type('Mileva')
        registerPage.lastName.type('Maric')
        registerPage.password.type('Test@12345')
        registerPage.passwordConfirmation.type('Test@12345')
        registerPage.email.type('mileva')
        registerPage.termsAndConditions.click()
        registerPage.submit.click()
        registerPage.email.then(($input)=>{
            expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'Tihomir' is missing an '@'.")
          })
    })
})