
describe("Testes E2E - Cadastro de Usuário", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve cadastrar um usuário com dados válidos", () => {
    cy.get("#nome").type("João Silva");
    cy.get("#email").type("joao@email.com");
    cy.get("#senha").type("123456");

    cy.contains("Cadastrar").click();

    cy.get("#mensagem")
      .should("contain", "Cadastro realizado com sucesso!");
  });

  it("Deve apresentar erro com e-mail inválido", () => {
    cy.get("#nome").type("João Silva");
    cy.get("#email").type("email-invalido");
    cy.get("#senha").type("123456");

    cy.contains("Cadastrar").click();

    cy.get("#mensagem")
      .should("contain", "E-mail inválido.");
  });

  it("Deve impedir cadastro com campos vazios", () => {
    cy.contains("Cadastrar").click();

    cy.get("#mensagem")
      .should("be.empty");
  });

});
