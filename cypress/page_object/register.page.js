export default class RegisterPage {
   get firstName() {
       return cy.get('input[id="firstName"]')
   }
   get lastName() {
       return cy.get('input[id="lastName"]')
   }
   get password() {
       return cy.get('input[id="password"]')
   }
   get passwordConfirmation() {
       return cy.get('input[id="passwordConfirmation"]')
   }
   get email() {
       return cy.get('input[id="email"]')
   }
   get termsAndConditions() {
       return cy.get('input[id="termsAndConditions"]')
   }
   get submit() {
    return cy.get('button[type=submit]')
   }
   register(firstName,lastName,password,passwordConfirmation,email) {
       this.firstName.type(firstName)
       this.lastName.type(lastName)
       this.password.type(password)
       this.passwordConfirmation.type(passwordConfirmation)
       this.email.type(email)
       this.termsAndConditions.click()
       this.submit.click()
   }
}
 
export const registerPage = new RegisterPage()