/// <reference types="cypress-xpath" />
import cypress from "cypress";

describe('orangeHRMLogin', () => {
    it('UsingXPathPlugin', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.xpath("//input[@id='txtUsername']").type('Admin') 
        cy.xpath("//input[@id='txtPassword']").type('admin123') 
        cy.xpath("//input[@id='btnLogin']").click();       
    });

    xit('UsingTabPlugin', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')         
        cy.xpath("//*[@id='txtPassword']").type('Admin123')
        cy.xpath("//*[@id'btnLogin']").click();       
    });
});