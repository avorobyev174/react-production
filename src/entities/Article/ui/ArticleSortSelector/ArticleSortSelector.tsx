import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { type ISelectOption, Select } from '@/shared/ui/Select/Select';
import { type TSortOrder } from '@/shared/types';
import { EArticleSortField } from '@/entities/Article/model/const/const';

interface IArticleSortSelectorProps {
  className?: string;
  sort: EArticleSortField;
  order: TSortOrder;
  onChangeOrder: (newOrder: TSortOrder) => void;
  onChangeSort: (newSort: EArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props;
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<ISelectOption[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [ t ]);

  const sortFieldOptions = useMemo<ISelectOption[]>(() => [
    {
      value: EArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: EArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: EArticleSortField.VIEWS,
      content: t('просмотрам')
    }
  ], [ t ]);

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as EArticleSortField);
  }, [ onChangeSort ])
  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as TSortOrder);
  }, [ onChangeOrder ])

  return (
    <div className={ classNames(styles.ArticleSortSelector, {}, [ className ]) }>
      <Select
        options={ sortFieldOptions }
        onChange={ changeSortHandler }
        label={ t('Сортировать по') }
        value={ sort }
      />
      <Select
        options={ orderOptions }
        label={ t('по') }
        onChange={ changeOrderHandler }
        value={ order }
      />
    </div>
  );
});
