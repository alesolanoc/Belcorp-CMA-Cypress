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

    it('Validate if Iam in HomePage then Inicio label should be displayed', () => {
        HomePage.elements.inicioLabel().should('have.text','Inicio')
    })

    it('Validate if Iam in HomePage then Hola label should be displayed', () => {
        HomePage.elements.holaLabel().contains('Hola')
    })

    it('Validate if Iam in HomePage then Eventos label should be displayed', () => {
        HomePage.elements.eventosLabel().contains('Evento')
    })

    it('Validate if Iam in HomePage then I sohuld be able to get into Gana+ page after click Gana+ card', () => {
        HomePage.pressGanaMasButton()
    })
}) 