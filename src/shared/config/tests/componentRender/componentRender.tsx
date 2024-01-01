import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export interface IRenderWithRouterOptions {
  route?: string;
}

export function componentRender (component: ReactNode, { route = '/' }: IRenderWithRouterOptions = {}) {
  return render(
    <MemoryRouter initialEntries={ [ route ] }>
      <I18nextProvider i18n={ i18nForTests }>
        { component }
      </I18nextProvider>
    </MemoryRouter>
  )
}
