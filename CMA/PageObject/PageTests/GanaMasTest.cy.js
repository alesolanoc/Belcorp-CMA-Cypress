import GanaMasPagePage from "../PageElements/GanaMasPage.cy"
import HomePage from "../PageElements/HomePage.cy"


describe('CMA Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearCookies()
    })

    beforeEach(() => {
        cy.visit('http://localhost:5173/',{failOnStatusCode: false}) 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return !err.message.includes(`Cannot read property '__error' of null`);
          })
          cy.wait(2000)
    })

    it('Validate if Iam in GanaMasPage then Gana+ label should be displayed', () => {
        HomePage.pressGanaMasButton()
        GanaMasPagePage.elements.ganaMasLabel().should('have.text','Gana +')
    })

    it('Validate if Iam in GanaMasPage then I sohuld be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressGanaMasButton()
        GanaMasPagePage.pressPaisDropDownMenuButton()
        GanaMasPagePage.pressPaisPeruFromDropDownMenuButton()
        GanaMasPagePage.pressCampaniaDropDownMenuButton()
        GanaMasPagePage.pressCampania202501FromDropDownMenuButton()
    })
}) 