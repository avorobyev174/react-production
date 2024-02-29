import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type CombinedState, type Reducer } from 'redux';
import { type IStateSchema, type IThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';
import { $api } from '@/shared/api/api';
import { scrollSaveReducer } from '@/features/ScrollSave';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [ rtkApi.reducerPath ]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducers);
  const extraArg: IThunkExtraArg = {
    api: $api,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
