import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSelector } from 'entites/Article';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageActions, articlePageReducer, getArticles } from 'pages/articles-page/model/slice/articlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/articles-page/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { getArticlesIsLoading, getArticlesView } from 'pages/articles-page/model/selectors/articles';
import { type EArticleView } from 'entites/Article/model';

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

  const onViewChange = useCallback((view: EArticleView) => {
    dispatch(articlePageActions.setView(view));
  }, [ dispatch ]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlePageActions.initState());
  });

  return (
    <DynamicModuleLoader
      name='articlesPage'
      reducers={ reducers }
    >
      <div className={ classNames(styles.ArticlesPage, {}, [ className ]) }>
        <ArticleViewSelector
          view={ view }
          onViewClick={ onViewChange }
        />
        <ArticleList
          isLoading={ isLoading }
          articles={ articles }
          view={ view }
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
