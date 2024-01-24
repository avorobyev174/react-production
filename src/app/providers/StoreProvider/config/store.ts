import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entites/Counter';
import { userReducer } from 'entites/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export function createReduxStore (initialState?: IStateSchema, asyncReducers?: ReducersMapObject<IStateSchema>) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}
