describe('curacelprovider', () => {
  it('logintest', () => {
    cy.visit('https://ironman.claims.curacel.co/#/login')

    cy.get('#input-live').type('user1@hospital1.com')

    cy.get(':nth-child(2) > .form-control').type('Password123_')

    cy.get('button').click()

    cy.wait(5000)

    cy.get('.navbar-brand').contains('Dashboard')



  })
})