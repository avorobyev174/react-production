import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localStorage';
import { IUser } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (
  username: string = 'testuser',
  password: string = '123',
) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
    return body;
  });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<IUser>;
      getByTestId(testId: string): ReturnType<typeof cy.get>;
    }
  }
}
