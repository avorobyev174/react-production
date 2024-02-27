import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotificationButton.module.scss'
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entites/Notification';

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={ classNames(styles.NotificationButton, {}, [ className ]) }
      direction="bottom left"
      trigger={(
        <Button theme={ EButtonTheme.CLEAR }>
          <Icon Svg={ NotificationIcon } inverted />
        </Button>
      )}>
      <NotificationList className={ styles.notifications } />
    </Popover>
  );
});
