export default class HomePage{
    get title() {
        return cy.get('inpu[id="title"]')
    }
    get professor() {
        return cy.get('input[id="professor"]') 
    }
    get submitButton() {
        return cy.get("button[type=submit]").contains('Submit')
    }
}
export const homePage = new HomePage()