import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './NotificationList.module.scss';
import { useNotifications } from 'entites/Notification/api/notificationApi';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from 'entites/Notification/ui/NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface INotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
  const { className } = props;
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 10000
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={ classNames(styles.NotificationList, {}, [ className ]) }
      >
        <Skeleton width={ '100%' } height={ '80px' } border={ '8px' }/>
        <Skeleton width={ '100%' } height={ '80px' } border={ '8px' }/>
        <Skeleton width={ '100%' } height={ '80px' } border={ '8px' }/>
      </VStack>
    )
  }

  return (
    <VStack
      gap="16"
      max
      className={ classNames(styles.NotificationList, {}, [ className ]) }
    >
      { notifications?.map((notification) => (
        <NotificationItem
          key={ notification.id }
          notification={ notification }
        />
      )) }
    </VStack>
  );
});
