import { classNames } from 'shared/lib/classNames/classNames';
import styles from './CommentList.module.scss'
import { memo } from 'react';
import { CommentCard, type IComment } from 'entites/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ICommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: ICommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={ classNames(styles.CommentList, {}, [ className ]) }>
        <CommentCard isLoading={ isLoading }/>
        <CommentCard isLoading={ isLoading }/>
        <CommentCard isLoading={ isLoading }/>
      </div>
    );
  }

  return (
    <div className={ classNames(styles.CommentList, {}, [ className ]) }>
      {
        comments?.length
          ? comments.map((comment) =>
            <CommentCard
              className={ styles.comment }
              key={ comment.id }
              comment={ comment }
              isLoading={ isLoading }
            />
          )
          : <Text text={ t('Комментарии отсутствуют')} />
      }
    </div>
  );
});
