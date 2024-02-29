import { rtkApi } from '@/shared/api/rtkApi';
import { type IRating } from '@/entities/Rating';

interface IGetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface IRateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], IGetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-rating',
        params: {
          userId,
          articleId
        }
      }),
    }),
    rateArticle: build.mutation<void, IRateArticleArg>({
      query: (arg) => ({
        url: '/article-rating',
        method: 'POST',
        body: arg
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
