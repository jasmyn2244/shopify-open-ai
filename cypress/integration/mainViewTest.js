describe('User can submit prompts to the ai api and view responses', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('User should be able to visit page and view elements', () => {
    cy.get('.icon').should('have.attr', 'src', '/static/media/roboticon.3b42c68eceaa8f46695c.png')
    cy.get('.heading').contains('AI Assistant')
    cy.get('[data-cy="welcome-message"]').should('exist')
    cy.get('li')
      .eq(0).contains('How can I be the best intern?')
    cy.get('#userPrompt').type('How can I improve as a software developer?')
    cy.get('.submit-button').click()
    cy.get('.card > :nth-child(1)').contains('Prompt: How can I improve as a software developer?')
    cy.get('.card > :nth-child(2)').should('exist')
  })
})