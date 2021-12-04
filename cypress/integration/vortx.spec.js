/// <reference types="Cypress" />

describe('Teste do site da Vortx', () => {
  const urlVortx = 'https://vortx.com.br';
  const urlCotas = 'https://vortx.com.br/investidor/fundos-investimento';
  describe('Visita o site da vortx', () => {
    beforeEach(() => {
      cy.visit(urlVortx);
    });

    it('verifica se no há um header com um menu de navegação', () => {
      const navBar = cy.get('header .navbar');

      expect(navBar).to.exist;

      navBar.should('to.have.length', 1);
    });

    it('verifica se há um video no body', () => {
      const video = cy.get('iframe');

      expect(video).to.exist;

      video.should('be.visible');
    });

    it.only('verifica se a uma sessão com alerta de fraude', () => {
      const alertSection = cy.get('h4').contains('ALERTA DE FRAUDE');

      alertSection.should('to.exist');
      alertSection.next('p').should('to.exist');
    });
  });

  it('Navega até a sessão do investidor e entra em undos de investimentos', () => {
    cy.visit(urlVortx);

    cy.get('#investidor').click();
    cy.get('#investidor4').click();
  });

  it('Acessar o primeiro fundo que aparecer na tabela', () => {
    cy.visit(urlCotas);
    cy.get('tbody tr:first').click();
  });

  it('Lê todas as informações do Dashboard e salva em um banco de dados ou arquivo.', () => {
    cy.visit(urlCotas);

    const teste = cy.get('tbody tr:first');
    expect(teste).to.exist;
    cy.get('tbody tr:first').click();
  });

  it('Acessa a aba de documentos e realiza download do segundo arquivo que aparecer', () => {});

  it('', () => {});
});
