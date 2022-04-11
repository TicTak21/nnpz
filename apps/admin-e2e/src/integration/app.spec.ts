describe('admin', () => {
  const rootUrl = '/';

  beforeEach(() => {
    cy.visit(rootUrl);
  });

  after(() => {
    cy.visit(rootUrl);
  });

  it('should redirect to the /dashboard', () => {
    cy.url().should('include', 'dashboard');
  });
});
