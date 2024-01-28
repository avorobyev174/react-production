import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type ReactNode } from 'react';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
  const navigate = useNavigate();
  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
    navigate
  );

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};
