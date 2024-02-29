import type { IArticleDetailsCommentsSchema, } from './ArticleDetailsCommentsSchema';
import type { IArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsRecommendationsSchema;
}
