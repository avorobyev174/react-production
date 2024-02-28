import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { type IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';

interface ICommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: ICommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={ classNames('', {}, [ className ]) }
      >
        <CommentCard isLoading={ isLoading }/>
        <CommentCard isLoading={ isLoading }/>
        <CommentCard isLoading={ isLoading }/>
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={ classNames('', {}, [ className ]) }
    >
      {
        comments?.length
          ? comments.map((comment) =>
            <CommentCard
              key={ comment.id }
              comment={ comment }
              isLoading={ isLoading }
            />
          )
          : <Text text={ t('Комментарии отсутствуют')} />
      }
    </VStack>
  );
});
