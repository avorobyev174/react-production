import { type IStateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: IStateSchema) => state?.articlesDetails?.isLoading || false;
export const getArticleDetailsData = (state: IStateSchema) => state?.articlesDetails?.data;
export const getArticleDetailsError = (state: IStateSchema) => state?.articlesDetails?.error;
