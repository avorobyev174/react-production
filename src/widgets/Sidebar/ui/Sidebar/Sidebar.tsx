import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={ classNames(styles.Sidebar, { [ styles.collapsed ]: collapsed }, [ className ])}>
      <button onClick={ onToggle }>toggle</button>
      <div className={ styles.switchers }>
        <ThemeSwitcher />
        <LangSwitcher className={ styles.lang }/>
      </div>
    </div>
  );
};
