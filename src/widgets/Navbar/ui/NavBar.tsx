import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, [ ]);
  return (
    <div className={ classNames(styles.navBar, {}, [ className ])}>
      <Button
        theme={ EButtonTheme.CLEAR_INVERTED }
        className={ styles.links }
        onClick={ onToggleModal }
      >
        { t('Войти') }
      </Button>
      <Modal
        isOpen={ isAuthModal }
        onClose={ onToggleModal }
      >
        { t('Lorem ipsum') }
      </Modal>
    </div>
  );
};
