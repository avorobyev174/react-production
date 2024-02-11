import React from 'react';
import { useTranslation } from 'react-i18next';
import { type ISideBarItem } from 'widgets/Sidebar/model/types/sidebar';
import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entites/User';

interface ISidebarItemProps {
  item: ISideBarItem;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={ classNames(styles.item, { [ styles.collapsed ]: collapsed }) }
      to={ item.path }
      theme={ AppLinkTheme.SECONDARY }
    >
      <item.Icon className={ styles.icon }/>
      <span className={ styles.link }>
        { t(item.text) }
      </span>
    </AppLink>
  );
};
