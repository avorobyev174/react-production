import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss'
import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';

interface IArticleDetailsPage {
  className?: string;
}

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

export const ArticleDetailsPage = ({ className }: IArticleDetailsPage) => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader
      name='articleDetailsPage'
      reducers={ reducers }
    >
      <Page className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails articleDetailsId={ id } />
          <ArticleRating articleId={ id }/>
          <ArticleRecommendationList />
          <ArticleDetailsComments articleDetailsId={ id } />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
