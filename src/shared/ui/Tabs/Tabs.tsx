import { memo, type ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Tabs.module.scss'
import { Card, ECardTheme } from '../../ui/Card/Card';

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: ITabItem[];
  value: string;
  onTabClick: (tab: ITabItem) => void;
}
export const Tabs = memo((props: ITabsProps) => {
  const {
    className, tabs, onTabClick, value,
  } = props;

  const clickHandle = useCallback((tab: ITabItem) => {
    return () => {
      onTabClick(tab);
    }
  }, [ onTabClick ])

  return (
    <div className={classNames(styles.Tabs, {}, [ className ])}>
      { tabs.map((tab) => (
        <Card
          theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED}
          className={styles.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          { tab.content }
        </Card>
      ))}
    </div>
  );
});
