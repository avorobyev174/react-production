import { lazy, Suspense } from 'react';
import { type IArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'));

export const ArticleRatingAsync = (props: IArticleRatingProps) => {
  return (
    <Suspense fallback={ <Skeleton width="100%" height={ 120 } />}>
      <ArticleRatingLazy { ...props } />
    </Suspense>
  )
}
