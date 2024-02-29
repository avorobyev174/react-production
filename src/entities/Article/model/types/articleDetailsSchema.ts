import { type IArticle } from '../types/article';

export interface IArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: IArticle;
}
