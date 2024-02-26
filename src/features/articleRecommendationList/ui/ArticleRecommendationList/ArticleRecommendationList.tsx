import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entites/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from 'features/articleRecommendationList/api/articleRecommendationsApi';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const target = '_blank';
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      gap="8"
      className={classNames('', {}, [className])}
    >
      <Text
        size={ ETextSize.L }
        title={ t('Рекомендации') }
      />
      <ArticleList
        isLoading={ isLoading }
        articles={ articles }
        target={ target }
        virtualized={ false }
      />
    </VStack>
  );
});
