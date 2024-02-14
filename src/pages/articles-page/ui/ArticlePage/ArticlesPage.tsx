import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react';
import { ArticleList } from 'entites/Article';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer, getArticles } from 'pages/articles-page/model/slice/articlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesIsLoading, getArticlesView } from 'pages/articles-page/model/selectors/articles';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from 'pages/articles-page/model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/articles-page/model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilters } from 'entites/Article/ui/ArticlePageFilters/ArticlePageFilters';

interface IArticlesPage {
  className?: string;
}

const reducers: TReducersList = {
  articlesPage: articlePageReducer
}

export const ArticlesPage = ({ className }: IArticlesPage) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);
  const [ searchParams ] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [ dispatch ])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader
      name='articlesPage'
      reducers={ reducers }
      removeAfterUnmount={ false }
    >
      <Page
        onScrollEnd={ onLoadNextPart }
        className={ classNames(styles.ArticlesPage, {}, [ className ]) }
      >
        <ArticlePageFilters />
        <ArticleList
          className={ styles.list }
          isLoading={ isLoading }
          articles={ articles }
          view={ view }
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
