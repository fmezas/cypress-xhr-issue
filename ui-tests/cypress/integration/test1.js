it('works', () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: 'http://localhost:3000/hello'
  }).as('hello');

  cy.visit('http://localhost:8000/');
  cy.get('#button1').click();
  cy.wait('@hello');
  cy.contains('"ok":true');
});
