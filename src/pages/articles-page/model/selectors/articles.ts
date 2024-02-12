import { type IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesIsLoading = (state: IStateSchema) => state?.articlesPage?.isLoading || false;
export const getArticlesError = (state: IStateSchema) => state?.articlesPage?.error;
export const getArticlesView = (state: IStateSchema) => state?.articlesPage?.view;
export const getArticlesPageLimit = (state: IStateSchema) => state?.articlesPage?.limit || 9;
export const getArticlesPage = (state: IStateSchema) => state?.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: IStateSchema) => state?.articlesPage?.hasMore;
