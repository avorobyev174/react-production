import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button, EButtonSize, EButtonTheme } from '@/shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '@/widgets/Sidebar/model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';

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
    <aside
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
      <VStack
        role="navigation"
        gap="8"
        className={ styles.items }
      >
        { itemsList }
      </VStack>
      <div className={ styles.switchers }>
        <ThemeSwitcher />
        <LangSwitcher
          className={ styles.lang }
          short={ collapsed }
        />
      </div>
    </aside>
  );
};

export const MemoizedSidebar = memo(Sidebar);
