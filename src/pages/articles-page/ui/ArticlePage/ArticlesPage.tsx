import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer } from 'pages/articles-page/model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from 'pages/articles-page/model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { ArticlePageFilters } from 'entites/Article/ui/ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from 'pages/articles-page/ui/ArticleInfiniteList/ArticleInfiniteList';

interface IArticlesPage {
  className?: string;
}

const reducers: TReducersList = {
  articlesPage: articlePageReducer
}

export const ArticlesPage = ({ className }: IArticlesPage) => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [ dispatch ])

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
        <ArticleInfiniteList className={ styles.list }/>
      </Page>
    </DynamicModuleLoader>
  )
};

export default memo(ArticlesPage);
