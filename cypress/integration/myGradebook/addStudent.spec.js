import { loginPage } from '../../page_object/login.page'
import { EMAIL } from '../../fixtures/constans'
describe('Add Student', function(){
    let student = "Jelena Miric"
    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Sign in').click()
        loginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })

      it('Add student to My Own Gradebook', function(){
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(0).click()
        cy.get('input[id="firstName"]').type('Jelena')
        cy.get('input[id="lastName"]').type('Miric')
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]').type('https://m.media-amazon.com/images/I/41Sk-63vQLL.jpg')
        cy.get('.btn').eq(4).click()
        cy.contains(student).should('be.visible')
      })
})