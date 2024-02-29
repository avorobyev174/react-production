import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationItem.module.scss'
import { type INotification } from '../../model/types/notifications';
import { Card, ECardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';

interface INotificationItemProps {
  className?: string;
  notification: INotification;
}

export const NotificationItem = memo((props: INotificationItemProps) => {
  const { className, notification } = props;
  const target = '_blank';

  const content = (
    <Card
      theme={ECardTheme.OUTLINED}
      className={classNames(styles.NotificationItem, {}, [ className ])}
    >
      <Text title={notification.title} text={notification.description} />
    </Card>
  )

  if (notification.href) {
    return (
      <AppLink className={styles.link} to={notification.href} target={target}>
        { content }
      </AppLink>
    )
  }

  return content;
});
