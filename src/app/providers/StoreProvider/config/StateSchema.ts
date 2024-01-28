import { type ICounterSchema } from 'entites/Counter';
import { type IUserSchema } from 'entites/User';
import { type ILoginSchema } from 'features/AuthByUserName';
import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
  type CombinedState,
  type Dispatch
} from '@reduxjs/toolkit';
import { type IProfileSchema } from 'entites/Profile';
import { type AxiosInstance } from 'axios';
import { type To } from 'history';
import { type NavigateOptions } from 'react-router';

export interface IStateSchema {
  counter: ICounterSchema,
  user: IUserSchema,
  loginForm?: ILoginSchema,
  profile?: IProfileSchema
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

export interface IThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
  rejectValue: T,
  extra: IThunkExtraArg,
  dispatch?: Dispatch
}
