import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type ITabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { EArticleType } from '../../model/const/const';

interface IArticleTypeTabsProps {
  className?: string;
  value: EArticleType;
  onChangeType: (type: EArticleType) => void;
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<ITabItem[]>(() => [
    { value: EArticleType.ALL, content: t('Все') },
    { value: EArticleType.IT, content: t('Айти') },
    { value: EArticleType.ECONOMICS, content: t('Экономика') },
    { value: EArticleType.SCIENCE, content: t('Наука') },
  ], [ t ]);

  const onTypeClick = useCallback((tab: ITabItem) => {
    onChangeType(tab.value as EArticleType)
  }, [ onChangeType ]);

  return (
    <Tabs
      className={classNames('', {}, [ className ])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTypeClick}
    />
  );
});
