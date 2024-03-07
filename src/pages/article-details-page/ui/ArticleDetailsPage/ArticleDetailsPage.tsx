import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import {
  DynamicModuleLoader,
  type TReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface IArticleDetailsPage {
  className?: string;
}

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = ({ className }: IArticleDetailsPage) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');
  if (!id) {
    return null;
  }

  const articleRatingCard = toggleFeatures({
    name: 'isArticleRatingEnabled',
    // eslint-disable-next-line react/no-unstable-nested-components
    on: () => <ArticleRating articleId={id} />,
    // eslint-disable-next-line react/no-unstable-nested-components
    off: () => <Card>{t('Оценка статей скоро появится!')}</Card>,
  });

  return (
    <DynamicModuleLoader name="articleDetailsPage" reducers={reducers}>
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails articleDetailsId={id} />
          {articleRatingCard}
          <ArticleRecommendationList />
          <ArticleDetailsComments articleDetailsId={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
