import { type IStateSchema } from 'app/providers/StoreProvider';

export const getArticlesIsLoading = (state: IStateSchema) => state?.articlesPage?.isLoading || false;
export const getArticlesError = (state: IStateSchema) => state?.articlesPage?.error;
export const getArticlesView = (state: IStateSchema) => state?.articlesPage?.view;
