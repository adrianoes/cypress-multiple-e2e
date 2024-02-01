/// <reference types="cypress" />

describe('click on the element', () => {

    it('heroku element must be clickable', () => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
        cy.title().should('eq', 'The Internet')
        cy.get('[onclick="addElement()"]').click()// it doesn't work with contains instead of get
        cy.get('[onclick="addElement()"]').click()
        cy.get('#elements > :nth-child(2)').click()//delete the second element of the elements parent div
    })
    it('webdriveruniversity element must be clickable', () => {
        cy.visit('https://webdriveruniversity.com/To-Do-List/index.html')
        cy.title().should('eq', 'WebDriver | To Do List')
        cy.get('#plus-icon').click()
        cy.get('input[placeholder="Add new todo"]').click().type('Task 1{enter}')
        cy.contains("li", 'Task 1').find('.fa').click()
    })
    it('qa-automation-practice element must be clickable', () => {
        cy.visit('https://qa-automation-practice.netlify.app/show-hide-element')
        cy.title().should('eq', 'QA Practice | Learn with RV')
        cy.get('.alert').contains('This text will be hidden')
        cy.contains('button', 'Show / Hide').click()
        cy.contains('This text will be hidden').should("not.be.visible")
        cy.contains('button', 'Show / Hide').click()
        cy.contains('This text will be hidden').should("be.visible")
    })
    it('practice.expandtesting element must be clickable', () => {
        cy.visit('https://practice.expandtesting.com/add-remove-elements')
        cy.title().should('eq', 'Test Automation Practice: Working with web Elements (Add and Remove)')
        cy.contains('button', 'Add Element').click()
        cy.contains('button', 'Delete').click().should("not.exist")
    })
    it('automationexercise element must be clickable', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
        cy.contains('button', 'Test Cases').click()
        cy.title().should('eq', 'Automation Practice Website for UI Testing - Test Cases')
        cy.contains('span', 'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
    })
    it('bearstore element must be clickable', () => {
        cy.visit('https://bearstore-testsite.smartbear.com/')
        cy.title().should('eq', 'Shop')
        cy.get('.menubar-group--special > [href="/news"]').click()
        cy.get('.heading-title').contains('News')
    })
    it('automationteststore element must be clickable', () => {
        cy.visit('https://automationteststore.com/')
        cy.title().should('eq', 'A place to practice your automation skills!')
        cy.contains('span', 'Specials').click()
        cy.title().should('eq', 'Special Offers')
        cy.get('.maintext').contains(' Special Offers')
    })
    it('ecommerce-playground.lambdatest element must be clickable', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        cy.title().should('eq', 'Your Store')
        cy.scrollTo('bottom') // Scroll to its bottom
        cy.get('#back-to-top > .fas').click()
    })
    it('bookcart.azurewebsites element must be clickable', () => {
        cy.visit('https://bookcart.azurewebsites.net/')
        cy.title().should('eq', 'BookCart')
        cy.get(':nth-child(3) > .mat-list-item-content > a').contains('Biography').click()
    })
    it('saucedemo element must be clickable', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should("be.visible")
        cy.get('.error-button').click()
        cy.get('[data-test="error"]').should("not.exist")
    })
    
})
