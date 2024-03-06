let profileId: string = '';
describe('пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('и профиль успешно загрузился', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'ulbi tv 2');
  });
  it('и редактирует его', () => {
    cy.updateProfile();
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'new');
    cy.getByTestId('ProfileCard.LastName').should('have.value', 'new2');
  });
});
