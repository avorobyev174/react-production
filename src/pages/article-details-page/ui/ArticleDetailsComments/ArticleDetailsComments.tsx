import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ETextSize, Text } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { getArticleComments } from '../../model/slice/articleDetailsPageCommentsSlice';
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/commets';
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from '@/shared/ui/Stack';

interface IArticleDetailsCommentsProps {
  className?: string;
  articleDetailsId?: string;
}

export const ArticleDetailsComments = memo((props: IArticleDetailsCommentsProps) => {
  const { className, articleDetailsId } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const error = useSelector(getArticleDetailsCommentsError);

  const onCommentSend = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [ dispatch ]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleDetailsId));
  })

  if (isLoading || error) {
    return (<Text text={t('Произошла ошибка при подгрузке данных')} />)
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames('styles.ArticleDetailsComments', {}, [ className ])}
    >
      <Text
        size={ETextSize.L}
        title={t('Комментарии')}
      />
      <AddCommentForm onSendComment={onCommentSend} />
      <CommentList
        isLoading={isLoading}
        comments={comments}
      />
    </VStack>
  );
});
