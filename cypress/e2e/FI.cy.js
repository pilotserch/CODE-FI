/// <reference types="Cypress" />
describe('Test Cases', () => {
  it('IF first test case', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('standard_user');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.url().should('contain','inventory.html');



  })
  it('IF second test case-negative', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('locked_out_user');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.url().should('contain','inventory.html');



  })
  it('IF third test case', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('standard_user');
    cy.get('[data-test="password"]') .type ('clave123');
    cy.get('[data-test="login-button"]') .click ();
    cy.get('[data-test="error"]').should('be.visible');
    

  })
  it('IF fourth test case', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('usiario123');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.get('[data-test="error"]').should('be.visible');



  })
  it('IF fifth test case', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('standard_user');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.get('.inventory_item').eq(0).find('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.inventory_item').eq(1).find('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 2);



  })
  it('IF sixth test case- negative', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('problem_user');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.get('.class="btn btn_secondary btn_small btn_inventory').each((button) => {
      button.click();
    });
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 6);



  })
  it('IF seventh test case', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('standard_user');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.url().should('contain','inventory.html');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_container').click();
    cy.url().should('contain', 'cart.html');
    cy.contains('Sauce Labs Backpack');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('usuario1');
    cy.get('[data-test="lastName"]').type('usuario');
    cy.get('[data-test="postalCode"]').type('1101');
    cy.get('[data-test="continue"]').click();
    cy.contains('Shipping Information');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', 'checkout-complete.html');
    cy.contains('Thank you for your order!');
    
  })
  it('IF eighth test case- negative', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("[data-test='username']") .type ('problem_user');
    cy.get('[data-test="password"]') .type ('secret_sauce');
    cy.get('[data-test="login-button"]') .click ();
    cy.url().should('contain','inventory.html');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_container').click();
    cy.url().should('contain', 'cart.html');
    cy.contains('Sauce Labs Bike Light');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('usuario2');
    cy.get('[data-test="lastName"]').type('usuario1');
    cy.get('[data-test="postalCode"]').type('1101');
    cy.get('[data-test="continue"]').click();
    cy.contains('Shipping Information');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', 'checkout-complete.html');
    cy.contains('Thank you for your order!');



  })  
   

 
})