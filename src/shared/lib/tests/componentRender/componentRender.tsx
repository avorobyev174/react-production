import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { ETheme } from '@/shared/const/theme';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';

export interface IRenderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  theme?: ETheme;
}

interface ITestProvider {
  children: ReactNode;
  options?: IRenderWithRouterOptions;
}

export function TestProvider(props: ITestProvider) {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = ETheme.LIGHT,
  } = options
  return (
    <MemoryRouter initialEntries={[ route ]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={ theme }>
            <div className={ `app ${ theme }`}>
              { children }
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(component: ReactNode, options: IRenderWithRouterOptions = {}) {
  return render(<TestProvider options={ options }>{ component }</TestProvider>);
}
