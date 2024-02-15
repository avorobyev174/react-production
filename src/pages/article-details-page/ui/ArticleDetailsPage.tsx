import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entites/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entites/Comment';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getArticleComments
} from 'pages/article-details-page/model/slices/articleDetailsPageCommentsSlice';
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
import { Page } from 'widgets/Page/Page';
import {
  getArticleRecommendations
} from 'pages/article-details-page/model/slices/articleDetailsPageRecommendationsSlice';
import {
  getArticleDetailsRecommendationsIsLoading
} from 'pages/article-details-page/model/selectors/recommendations';
import {
  fetchArticleRecommendations
} from 'pages/article-details-page/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from 'pages/article-details-page/model/slices';

interface IArticleDetailsPage {
  className?: string;
}

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

export const ArticleDetailsPage = ({ className }: IArticleDetailsPage) => {
  const { t } = useTranslation('articles');
  const target = '_blank';
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const isRecommendationsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
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
      name='articleDetailsPage'
      reducers={ reducers }
    >
      <Page className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
        <Button onClick={ onBackToList }>
          { t('Назад к списку') }
        </Button>
        <ArticleDetails articleDetailsId={ id }/>
        <Text
          size={ ETextSize.L }
          className={ styles.commentTitle }
          title={ t('Рекомендации') }
        />
        <ArticleList
          isLoading={ isRecommendationsLoading }
          articles={ recommendations }
          className={ styles.recommendations }
          target={ target }
        />
        <Text
          size={ ETextSize.L }
          className={ styles.commentTitle }
          title={ t('Комментарии') }
        />
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
