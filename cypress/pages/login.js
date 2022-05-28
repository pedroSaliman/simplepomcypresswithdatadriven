class Login{
open(){
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
}
information(theemail,password){
 const email=   cy.get("#Email");
 email.clear();
 email.should("be.empty");
 email.type(theemail);
 const pass=   cy.get("#Password");
 pass.clear();
 pass.should("be.empty");
 pass.type(password);
const btn= cy.get("button[type='submit']");

btn.should("be.visible");
btn.click();
const logout=cy.get("body > div:nth-child(3) > nav:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)");
logout.should("be.visible");
logout.click();
return this;


 

}






}export default Login;