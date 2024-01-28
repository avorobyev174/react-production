import React from 'react';
import { useTranslation } from 'react-i18next';
import { type ISideBarItem } from 'widgets/Sidebar/model/items';
import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

interface ISidebarItemProps {
  item: ISideBarItem;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();

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
