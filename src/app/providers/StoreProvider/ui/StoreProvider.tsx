import { Provider } from 'react-redux';
import { type ReactNode } from 'react';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../../StoreProvider/config/store';
import { type IStateSchema } from '../../StoreProvider/config/StateSchema';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
  );

  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};
