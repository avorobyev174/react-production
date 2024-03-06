import { type IStateSchema } from '@/app/providers/StoreProvider';
import { EArticleType, EArticleSortField } from '@/entities/Article';

export const getArticlesIsLoading = (state: IStateSchema) =>
  state?.articlesPage?.isLoading || false;
export const getArticlesError = (state: IStateSchema) =>
  state?.articlesPage?.error;
export const getArticlesView = (state: IStateSchema) =>
  state?.articlesPage?.view;
export const getArticlesPageLimit = (state: IStateSchema) =>
  state?.articlesPage?.limit || 9;
export const getArticlesPage = (state: IStateSchema) =>
  state?.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: IStateSchema) =>
  state?.articlesPage?.hasMore;
export const getArticlesPageInited = (state: IStateSchema) =>
  state?.articlesPage?._inited;
export const getArticlesPageOrder = (state: IStateSchema) =>
  state?.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: IStateSchema) =>
  state?.articlesPage?.sort ?? EArticleSortField.CREATED;
export const getArticlesPageSearch = (state: IStateSchema) =>
  state?.articlesPage?.search ?? '';
export const getArticlesPageType = (state: IStateSchema) =>
  state?.articlesPage?.type ?? EArticleType.ALL;
