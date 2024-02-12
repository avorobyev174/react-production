import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entites/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entites/Comment';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from 'pages/article-details-page/model/slices/ArticleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getArticleDetailsCommentsIsLoading
} from 'pages/article-details-page/model/selectors/commets';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  fetchCommentsByArticleId
} from 'pages/article-details-page/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddNewComment';
import {
  addCommentForArticle
} from 'pages/article-details-page/model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';

interface IArticleDetailsPage {
  className?: string;
}

const reducers: TReducersList = {
  articlesDetailsComments: articleDetailsCommentsReducer
}

export const ArticleDetailsPage = ({ className }: IArticleDetailsPage) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  })

  const onCommentSend = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [ dispatch ]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [ navigate ]);

  if (!id) {
    return (
      <div className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
        { t('Статья не найдена') }
      </div>
    )
  }

  return (
    <DynamicModuleLoader
      name='articlesDetailsComments'
      reducers={ reducers }
    >
      <Page className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
        <Button onClick={ onBackToList }>
          { t('Назад к списку') }
        </Button>
        <ArticleDetails articleDetailsId={ id }/>
        <Text className={ styles.commentTitle } title={ t('Комментарии') } />
        <AddCommentForm onSendComment={ onCommentSend } />
        <CommentList
          isLoading={ isLoading }
          comments={ comments }
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
