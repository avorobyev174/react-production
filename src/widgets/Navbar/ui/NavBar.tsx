import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()

  return (
    <div className={ classNames(styles.navBar, {}, [ className ])}>
      <div className={ styles.links }>
        <AppLink
          to={ '/' } className={ styles.mainLink }
          theme={ AppLinkTheme.SECONDARY }
        >
          { t('Главная') }
        </AppLink>
        <AppLink
          to={ '/about' }
          theme={ AppLinkTheme.SECONDARY }
        >
          { t('О сайте') }
        </AppLink>
      </div>
    </div>
  );
};
