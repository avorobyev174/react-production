import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface ISidebarProps {
  className?: string;
}

const Sidebar = ({ className }: ISidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={ classNames(styles.Sidebar, { [ styles.collapsed ]: collapsed }, [ className ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={ styles.collapseBtn }
        onClick={ onToggle }
        theme={ EButtonTheme.BACKGROUND_INVERTED }
        size={ EButtonSize.L }
        square
      >
        { collapsed ? '>' : '<' }
      </Button>
      <div className={ styles.items }>
        { SidebarItemList.map((item) => (
          <SidebarItem
            item={ item }
            key={ item.path }
            collapsed={ collapsed }
          />
        )) }
      </div>
      <div className={ styles.switchers }>
        <ThemeSwitcher />
        <LangSwitcher
          className={ styles.lang }
          short={ collapsed }
        />
      </div>
    </div>
  );
};

export const MemoizedSidebar = memo(Sidebar);
