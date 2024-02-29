import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ECountry } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

interface ICountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: ECountry) => void;
  readonly?: boolean;
}

const options = [
  { value: ECountry.USA, content: ECountry.USA },
  { value: ECountry.MEXICO, content: ECountry.MEXICO },
  { value: ECountry.RUSSIA, content: ECountry.RUSSIA },
];

export const CountrySelect = memo(({
  className, readonly, value, onChange,
}: ICountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as ECountry);
  }, [ onChange ])

  return (
    <ListBox
      className={classNames('', {}, [ className ])}
      readonly={readonly}
      defaultValue={t('Укажите страну')}
      items={options}
      value={value || ECountry.RUSSIA}
      onChange={onChangeHandler}
      label={t('Укажите страну')}
      direction="top right"
    />
  );
});
