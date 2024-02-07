import { type IArticle } from 'entites/Article';

export interface IArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: IArticle;
}
