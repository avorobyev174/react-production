import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlePageFilters.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleViewSelector, ArticleSortSelector, ArticleTypeTabs } from 'entites/Article';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
  getArticlesView
} from 'pages/articles-page/model/selectors/articles';
import { type EArticleType, type EArticleView } from 'entites/Article';
import { articlePageActions } from 'pages/articles-page/model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { type EArticleSortField } from 'entites/Article/model/types/article';
import { type TSortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/articles-page/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

interface IArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo((props: IArticlePageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [ dispatch ]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const onViewChange = useCallback((view: EArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [ dispatch ]);
  const onSortChange = useCallback((sort: EArticleSortField) => {
    dispatch(articlePageActions.setSort(sort));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [ dispatch, fetchData ]);
  const onOrderChange = useCallback((order: TSortOrder) => {
    dispatch(articlePageActions.setOrder(order));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [ dispatch, fetchData ]);
  const onSearchChange = useCallback((search: string) => {
    dispatch(articlePageActions.setSearch(search));
    dispatch(articlePageActions.setPage(1));
    debounceFetchData();
  }, [ dispatch, debounceFetchData ]);
  const onTypeChange = useCallback((value: EArticleType) => {
    dispatch(articlePageActions.setType(value));
    dispatch(articlePageActions.setPage(1));
    debounceFetchData();
  }, [ dispatch, debounceFetchData ]);

  return (
    <div className={ classNames(styles.ArticlePageFilters, {}, [ className ]) }>
      <div className={ styles.filterWrapper }>
        <ArticleSortSelector
          order={ order }
          sort={ sort }
          onChangeSort={ onSortChange }
          onChangeOrder={ onOrderChange }
        />
        <ArticleViewSelector
          view={ view }
          onViewClick={ onViewChange }
        />
      </div>
      <Card className={ styles.search }>
        <Input
          placeholder={ t('Поиск') }
          onChange={ onSearchChange }
          value={ search }
        />
      </Card>
      <ArticleTypeTabs
        className={ styles.tabs }
        value={ type }
        onChangeType={ onTypeChange }
      />
    </div>
  );
});
