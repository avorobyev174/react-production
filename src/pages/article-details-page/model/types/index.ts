import type { IArticleDetailsCommentsSchema, IArticleDetailsRecommendationsSchema } from '@/pages/article-details-page';

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsRecommendationsSchema;
}
