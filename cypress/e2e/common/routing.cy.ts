import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('пользователь НЕ авторизован', () => {
    it('переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    })
    it('переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    })
    it('переход не существующий маршрут', () => {
      cy.visit('/test');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    })
  })

  describe('пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    })
    it('переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    })
    it('переход на страницу статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    })
  })
})
