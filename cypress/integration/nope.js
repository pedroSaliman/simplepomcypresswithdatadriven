/// <reference types="cypress" />
import Login from "../pages/login";


describe("test cypress nope",()=>{
 before (()=>{
    cy.viewport(1536,960);

    const log = new Login();

    log.open();

  })
    

 it('testcase', () => {
    cy.fixture("valid").then(function(data){
        this.data=data;
        const login = new Login();



        this.data.forEach(function(element){
        // cy.get("#Email").clear();
// cy.get("#Email").type(element.name);
// cy.get("#Password").clear();
// cy.get("#Password").type(element.password);
// cy.get("button[type='submit']").click();
// cy.get("body > div:nth-child(3) > nav:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click();
        login.information(element.name,element.password);

        });
        
    
            }) ;
       
    
});
});