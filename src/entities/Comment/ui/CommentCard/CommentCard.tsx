import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './CommentCard.module.scss'
import { type IComment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { getRouteProfile } from '@/shared/const/router';

interface ICommentCard {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: ICommentCard) => {
  if (isLoading) {
    return (
      <VStack
        gap="8"
        max
        className={classNames(styles.CommentCard, {}, [ className, styles.loading ])}
      >
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={styles.username} width={16} height={100} />
        </div>
        <Skeleton className={styles.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [ className ])}>
      <AppLink
        to={ getRouteProfile(comment.user.id) }
        className={styles.header}
      >
        { comment.user.avatar
          ? <Avatar size={30} src={comment.user.avatar} />
          : null}
        <Text
          className={styles.username}
          title={comment.user.username}
        />
      </AppLink>
      <Text
        className={styles.text}
        text={comment.text}
      />
    </div>
  );
});
