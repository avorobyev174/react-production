import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss'
import { memo } from 'react';
import { ArticleDetails } from 'entites/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from 'pages/article-details-page/model/slices';
import { ArticleDetailsPageHeader } from 'pages/article-details-page/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationList } from 'features/articleRecommendationList';
import { ArticleDetailsComments } from 'pages/article-details-page/ui/ArticleDetailsComments/ArticleDetailsComments';

interface IArticleDetailsPage {
  className?: string;
}

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

export const ArticleDetailsPage = ({ className }: IArticleDetailsPage) => {
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader
      name='articleDetailsPage'
      reducers={ reducers }
    >
      <Page className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails articleDetailsId={ id } />
          <ArticleRecommendationList />
          <ArticleDetailsComments articleDetailsId={ id } />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
