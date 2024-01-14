import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entites/Counter';
import { userReducer } from 'entites/User';

export function createReduxStore (initialState?: IStateSchema) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<IStateSchema>({
    preloadedState: initialState,
    reducer: rootReducers,
    devTools: __IS_DEV__
  });
}
