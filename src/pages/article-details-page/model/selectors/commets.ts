import { type IStateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: IStateSchema) => state?.articleDetailsPage?.comments?.isLoading || false;
export const getArticleDetailsCommentsError = (state: IStateSchema) => state?.articleDetailsPage?.comments?.error;
