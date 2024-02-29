import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

export interface IRenderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export function componentRender(component: ReactNode, options: IRenderWithRouterOptions = {}) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = options;
  return render(
    <MemoryRouter initialEntries={[ route ]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          { component }
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
}
