import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlePageSlice';
import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../../model/selectors/articles';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';

interface IArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: IArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);

  if (error) {
    return (<Text text={ t('Произошла ошибка при подгрузке данных') } />)
  }

  return (
    <ArticleList
      className={ className }
      isLoading={ isLoading }
      articles={ articles }
      view={ view }
    />
  );
});
