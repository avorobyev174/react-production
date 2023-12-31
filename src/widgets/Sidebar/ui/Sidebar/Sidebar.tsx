import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

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
        onClick={ onToggle }>{ t('toggle') }</Button>
      <div className={ styles.switchers }>
        <ThemeSwitcher />
        <LangSwitcher className={ styles.lang }/>
      </div>
    </div>
  );
};
