import { configureStore } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entites/Counter';

export function createReduxStore (initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    preloadedState: initialState,
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__
  });
}
