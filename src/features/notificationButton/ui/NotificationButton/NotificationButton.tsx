import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotificationButton.module.scss'
import React, { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entites/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props;
  const [ isOpen, setIsOpen ] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, []);

  const trigger = (
    <Button onClick={ onOpenDrawer } theme={ EButtonTheme.CLEAR }>
      <Icon Svg={ NotificationIcon } inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={ classNames('', {}, [ className ]) }
          direction="bottom left"
          trigger={ trigger }>
          <NotificationList className={ styles.notifications } />
        </Popover>
      </BrowserView>
      <MobileView>
        { trigger }
        <Drawer
          isOpen={ isOpen }
          onClose={ onCloseDrawer }
        >
          <NotificationList className={ styles.notifications } />
        </Drawer>
      </MobileView>
    </div>
  );
});
