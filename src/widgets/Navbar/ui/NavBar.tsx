import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entites/User';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [ dispatch ]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={ classNames(styles.navBar, {}, [ className ])}>
        <Text
          theme={ ETextTheme.INVERTED }
          className={ styles.appName }
          title={ t('AV app') }
        />
        <AppLink
          theme={ AppLinkTheme.SECONDARY }
          to={ RoutePath.article_create }
          className={ styles.createBtn }
        >{ t('Создать статью') }</AppLink>
        <Dropdown
          className={ styles.dropdown }
          direction="bottom left"
          items={ [
            ...(
              isAdminPanelAvailable
                ? [ { content: t('Админка'), href: RoutePath.admin_panel } ]
                : []
            ),
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id
            },
            {
              content: t('Выйти'),
              onClick: onLogout
            }
          ]}
          trigger={ <Avatar size={ 30 } src={ authData.avatar }/> }
        />
      </header>
    );
  } else {
    return (
      <header className={ classNames(styles.navBar, {}, [ className ])}>
        <Button
          theme={ EButtonTheme.CLEAR_INVERTED }
          className={ styles.links }
          onClick={ onShowModal }
        >
          { t('Войти') }
        </Button>
        { isAuthModal && <LoginModal
          isOpen={ isAuthModal }
          onClose={ onCloseModal }
        />
        }
      </header>
    );
  }
};

export const MemoizedNavbar = memo(NavBar);
