import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
  type CombinedState,
  type Dispatch,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type IUserSchema } from '@/entities/User';
import { type ILoginSchema } from '@/features/authByUserName';
import { type IArticleDetailsSchema } from '@/entities/Article';
import { type IArticleDetailsPageSchema } from '@/pages/article-details-page';
import { type IAddCommentFormSchema } from '@/features/addCommentForm';
import { type IArticlesPageSchema } from '@/pages/ArticlesPage';
import { type IScrollSaveSchema } from '@/features/ScrollSave';
import { type rtkApi } from '@/shared/api/rtkApi';
import { type IProfileSchema } from '@/features/editableProfileCard';

export interface IStateSchema {
  user: IUserSchema,
  scrollSave: IScrollSaveSchema,
  [ rtkApi.reducerPath ]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  loginForm?: ILoginSchema,
  profile?: IProfileSchema
  articlesDetails?: IArticleDetailsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;
  articleDetailsPage?: IArticleDetailsPageSchema;
}

export type TStateSchemaKey = keyof IStateSchema;
export type TMountedReducers = OptionalRecord<TStateSchemaKey, boolean>;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>,
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>,
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
  getMountedReducers: () => TMountedReducers;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance
}

export interface IThunkConfig<T> {
  rejectValue: T,
  extra: IThunkExtraArg,
  dispatch?: Dispatch,
  state: IStateSchema
}
