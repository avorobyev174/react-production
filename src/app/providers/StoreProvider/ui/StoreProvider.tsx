import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type ReactNode } from 'react';
import { type DeepPartial } from '@reduxjs/toolkit';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
  const store = createReduxStore(initialState as IStateSchema);

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};
