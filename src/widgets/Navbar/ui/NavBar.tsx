import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entites/User';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [ dispatch ]);

  if (authData) {
    return (
      <div className={ classNames(styles.navBar, {}, [ className ])}>
        <Button
          theme={ EButtonTheme.CLEAR_INVERTED }
          className={ styles.links }
          onClick={ onLogout }
        >
          { t('Выйти') }
        </Button>
      </div>
    );
  } else {
    return (
      <div className={ classNames(styles.navBar, {}, [ className ])}>
        <Button
          theme={ EButtonTheme.CLEAR_INVERTED }
          className={ styles.links }
          onClick={ onShowModal }
        >
          { t('Войти') }
        </Button>
        <LoginModal
          isOpen={ isAuthModal }
          onClose={ onCloseModal }
        />
      </div>
    );
  }
};
