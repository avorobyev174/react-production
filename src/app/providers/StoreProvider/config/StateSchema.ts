import { type ICounterSchema } from 'entites/Counter';
import { type IUserSchema } from 'entites/User';
import { type ILoginSchema } from 'features/AuthByUserName';
import { type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject, type CombinedState } from '@reduxjs/toolkit';

export interface IStateSchema {
  counter: ICounterSchema,
  user: IUserSchema,
  loginForm?: ILoginSchema
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>,
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>,
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}
