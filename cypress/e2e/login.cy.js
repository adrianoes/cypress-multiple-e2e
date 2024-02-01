/// <reference types="cypress" />

describe('click on the element', () => {

    it('heroku user must be able to login', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        cy.location('pathname').should('eq', '/basic_auth')
        cy.contains('h3', 'Basic Auth').should('be.visible')
        cy.contains('p', 'Congratulations! You must have the proper credentials.').should('be.visible')
        //https://www.youtube.com/watch?v=Fc1hadiLoNI video sobre sujeito que ensina isso aqui
    })
    it('webdriveruniversity user must be able to login', () => {
        cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')
        cy.title().should('eq', 'WebDriver | Login Portal')
        cy.get('input[placeholder="Username"]').click().type('Testerrr')
        cy.get('input[placeholder="Password"]').click().type('Pwd123')
        cy.contains('button', 'Login').click()
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('button')
            .click()
            .then(() => {
            expect(stub.getCall(1)).to.be.calledWith('validation failed')//esperado pois não sou cliente deles e eles fazem login com credenciais oficiais de alunos
            })
    })
    it('qa-automation-practice user must be able to login', () => {
        cy.visit('https://qa-automation-practice.netlify.app/login')
        cy.title().should('eq', 'QA Practice | Learn with RV')
        cy.get('input[placeholder="Enter email"]').click().type('admin@admin.com')
        cy.get('input[placeholder="Password"]').click().type('admin123')
        cy.contains('button', 'Submit').click()
        cy.contains('#message', 'admin@admin.com, you have successfully logged in!').should('be.visible')
    })
    it('practice.expandtesting user must be able to login', () => {
        cy.visit('https://practice.expandtesting.com/login')
        cy.title().should('eq', 'Test Automation Practice: Working with Login form')
        cy.get('input[name="username"]').click().type('practice')
        cy.get('input[name="password"]').click().type('SuperSecretPassword!')
        cy.contains('button', 'Login').click()
        cy.contains('b', 'You logged into a secure area!').should('be.visible')
    })
    it('automationexercise user must be able to login', () => {
        cy.visit('https://automationexercise.com/login')
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
        cy.get('input[data-qa="login-email"]').click().type('testerrr@tester.com')
        cy.get('input[placeholder="Password"]').click().type('Pwd123')
        cy.contains('button', 'Login').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('exist')
        cy.contains("li", ' Logout').find('.fa').click()
    })
    it('bearstore user must be able to login', () => {
        cy.visit('https://bearstore-testsite.smartbear.com/login?returnUrl=%2F')
        cy.title().should('eq', 'Shop. Login')
        cy.get('input[placeholder="Username or email"]').click().type('testerrr@tester.com')
        cy.get('input[placeholder="Password"]').click().type('Pwd123')
        cy.contains('button', 'Log in').click()
        cy.title().should('eq', 'Shop')
        cy.contains('testerrr')
    })
    it('automationteststore user must be able to login', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.title().should('eq', 'Account Login')
        cy.get('input[name="loginname"]').click().type('testerrr')
        cy.get('input[name="password"]').click().type('Pwd123')
        cy.contains('button', 'Login').click()
        cy.title().should('eq', 'My Account')
        cy.contains('h1', ' My Account').should('be.visible')
        cy.get('.side_account_list > :nth-child(10) > a').contains(' Logoff').click()
        cy.get('.mb40 > .btn').contains('Continue').click()
    })
    it('ecommerce-playground.lambdatest user must be able to login', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.title().should('eq', 'Account Login')
        cy.get('input[placeholder="E-Mail Address"]').click().type('testerrr@tester.com')
        cy.get('input[placeholder="Password"]').click().type('Pwd123')
        cy.get('input[value="Login"]').click()
        cy.title().should('eq', 'My Account')
        cy.get(':nth-child(1) > .card-header').contains('My Account').should('be.visible')
        cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/logout"]').contains('Logout').should('be.visible').click()
        cy.get('.buttons > .btn').contains('Continue').click()
    })
    it('bookcart.azurewebsites user must be able to login', () => {
        cy.visit('https://bookcart.azurewebsites.net/login')
        cy.title().should('eq', 'BookCart')
        cy.get('input[data-placeholder="Username"]').click().type('testerrr')
        cy.get('input[data-placeholder="Password"]').click().type('Pwd12345')
        cy.get('.mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').contains('Login').click()
        cy.get('.mat-focus-indicator > .mat-button-wrapper').contains('testerrr').click()
        cy.get('.mat-focus-indicator').contains('Logout').click()
    })
    it('saucedemo user must be able to login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
        cy.get('input[placeholder="Username"]').click().type('standard_user')
        cy.get('input[placeholder="Password"]').click().type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('.title').contains('Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').contains('Logout').click()
    })
    
})


