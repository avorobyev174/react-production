import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entites/Article';
import { useParams } from 'react-router-dom';
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
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  })

  const onCommentSend = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [ dispatch ]);

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
      removeAfterUnmount
    >
      <div className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
        <ArticleDetails articleDetailsId={ id }/>
        <Text className={ styles.commentTitle } title={ t('Комментарии') } />
        <AddCommentForm onSendComment={ onCommentSend } />
        <CommentList
          isLoading={ isLoading }
          comments={ comments }
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
