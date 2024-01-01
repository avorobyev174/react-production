import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/RouteConfig/RouteConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false);
  const { t } = useTranslation()
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
        <AppLink
          className={ styles.item }
          to={ RoutePath.main }
          theme={ AppLinkTheme.SECONDARY }
        >
          <MainIcon className={ styles.icon }/>
          <span className={ styles.link }>
            { t('Главная') }
          </span>
        </AppLink>
        <AppLink
          className={ styles.item }
          to={ RoutePath.about }
          theme={ AppLinkTheme.SECONDARY }
        >
          <AboutIcon className={ styles.icon }/>
          <span className={ styles.link }>
            { t('О сайте') }
          </span>
        </AppLink>
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
