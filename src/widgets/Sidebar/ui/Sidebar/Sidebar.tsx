import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';

interface ISidebarProps {
  className?: string;
}

const Sidebar = ({ className }: ISidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false);
  const sideBarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => sideBarItemsList?.map((item) => (
    <SidebarItem
      item={ item }
      key={ item.path }
      collapsed={ collapsed }
    />
  )), [ collapsed, sideBarItemsList ]);

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
        { itemsList }
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
