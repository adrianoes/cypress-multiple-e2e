/// <reference types="cypress" />

describe('home', () => {

    it('heroku website must be reachable', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.title().should('eq', 'The Internet')
    })
    it('webdriveruniversity website must be reachable', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.title().should('eq', 'WebDriverUniversity.com')
    })
    it('qa-automation-practice website must be reachable', () => {
        cy.visit('https://qa-automation-practice.netlify.app/')
        cy.title().should('eq', 'QA Practice | Learn with RV')
    })
    it('practice.expandtesting website must be reachable', () => {
        cy.visit('https://practice.expandtesting.com/#examples')
        cy.title().should('eq', 'Automation Testing Practice Website for UI and API')
    })
    it('automationexercise website must be reachable', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
    })
    it('bearstore website must be reachable', () => {
        cy.visit('https://bearstore-testsite.smartbear.com/')
        cy.title().should('eq', 'Shop')
    })
    it('automationteststore website must be reachable', () => {
        cy.visit('https://automationteststore.com/')
        cy.title().should('eq', 'A place to practice your automation skills!')
    })
    it('ecommerce-playground.lambdatest website must be reachable', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        cy.title().should('eq', 'Your Store')
    })
    it('bookcart.azurewebsites website must be reachable', () => {
        cy.visit('https://bookcart.azurewebsites.net/')
        cy.title().should('eq', 'BookCart')
    })   
    it('saucedemo website must be reachable', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
    })

})
