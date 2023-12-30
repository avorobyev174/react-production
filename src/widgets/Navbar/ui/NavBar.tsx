import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={ classNames(styles.navBar, {}, [ className ])}>
      <div className={ styles.links }>
        <AppLink
          to={ '/' } className={ styles.mainLink }
          theme={ AppLinkTheme.SECONDARY }
        >
          Главная
        </AppLink>
        <AppLink
          to={ '/about '}
          theme={ AppLinkTheme.SECONDARY }
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

