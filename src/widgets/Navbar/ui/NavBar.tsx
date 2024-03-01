import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NavBar.module.scss'
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/authByUserName';
import { getUserAuthData } from '@/entities/User';
import { ETextTheme, Text } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(styles.navBar, {}, [ className ])}>
        <Text
          theme={ETextTheme.INVERTED}
          className={styles.appName}
          title={t('AV app')}
        />
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={ getRouteArticleCreate() }
          className={styles.createBtn}
        >
          { t('Создать статью') }
        </AppLink>
        <HStack gap="16" className={styles.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }
  return (
    <header className={classNames(styles.navBar, {}, [ className ])}>
      <Button
        theme={EButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onShowModal}
      >
        { t('Войти') }
      </Button>
      { isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
};

export const MemoizedNavbar = memo(NavBar);
