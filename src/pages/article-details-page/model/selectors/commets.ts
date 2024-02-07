import { type IStateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: IStateSchema) => state?.articlesDetailsComments?.isLoading || false;
export const getArticleDetailsCommentsError = (state: IStateSchema) => state?.articlesDetailsComments?.error;
