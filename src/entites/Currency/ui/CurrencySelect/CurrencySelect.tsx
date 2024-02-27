import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ECurrency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';

interface ICurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: ECurrency) => void;
  readonly?: boolean;
}

const options = [
  { value: ECurrency.RUB, content: ECurrency.RUB },
  { value: ECurrency.EUR, content: ECurrency.EUR },
  { value: ECurrency.USD, content: ECurrency.USD }
];

export const CurrencySelect = memo(({ className, readonly, value, onChange }: ICurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as ECurrency);
  }, [ onChange ])

  return (
    <ListBox className={ classNames('', {}, [ className ])}
      readonly={ readonly }
      defaultValue={ t('Укажите валюту') }
      items={ options }
      value={ value || ECurrency.RUB }
      onChange={ onChangeHandler }
      label={ t('Укажите валюту') }
      direction="top right"
    />
  );
});
