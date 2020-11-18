const baseUrl = 'http://localhost:5000/';
 
describe('Sandbox app', () => {
  it('should add item', () => {
    cy.visit(baseUrl);

    cy.contains('Add Random').as('addBtn');

    // test
    const addBtn = cy.get('@addBtn');
    addBtn.should('not.be.disabled');
    addBtn.click();

    cy.contains('AutoGen1');
  });

  it('should reset added item', () => {
    cy.visit(baseUrl);

    cy.contains('Add Random').as('addBtn');
    cy.contains('Reset').as('resetBtn');

    const addBtn = cy.get('@addBtn');
    addBtn.should('not.be.disabled');
    addBtn.click();
    cy.contains('AutoGen1');

    // test
    const resetBtn = cy.get('@resetBtn');
    resetBtn.should('not.be.disabled');
    resetBtn.click();

    cy.contains('AutoGen1').should('not.exist');
  });

  it('should clear all items', () => {
    cy.visit(baseUrl);

    cy.contains('Johann Sebastian Bach');
    cy.contains('Wolfgang Amadeus Mozart');
    cy.contains('Add Random').as('addBtn');
    cy.contains('Clear All').as('clearAllBtn');

    const addBtn = cy.get('@addBtn');
    addBtn.should('not.be.disabled');
    addBtn.click();
    cy.contains('AutoGen1');

    // test
    const clearAllBtn = cy.get('@clearAllBtn');
    clearAllBtn.should('not.be.disabled');
    clearAllBtn.click();

    cy.contains('AutoGen1').should('not.exist');
    cy.contains('Johann Sebastian Bach').should('not.exist');
    cy.contains('Wolfgang Amadeus Mozart').should('not.exist');
  });
});
