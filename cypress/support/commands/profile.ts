export const updateProfile = () => {
  cy.getByTestId('EditableProfilePageHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstName').clear().type('new');
  cy.getByTestId('ProfileCard.LastName').clear().type('new2');
  cy.getByTestId('EditableProfilePageHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: 'asdas' },
    body: {
      id: '4',
      first: 'ulbi tv 2',
      lastname: 'asf',
      age: 465,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'ulbi tv2',
      avatar: 'https://loremflickr.com/640/360',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
