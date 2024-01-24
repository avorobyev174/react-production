import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type ReactNode } from 'react';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>
  );

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};
