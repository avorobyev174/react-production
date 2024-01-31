import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECountry } from 'entites/Country';

interface ICountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: ECountry) => void;
  readonly?: boolean;
}

const options = [
  { value: ECountry.USA, content: ECountry.USA },
  { value: ECountry.MEXICO, content: ECountry.MEXICO },
  { value: ECountry.RUSSIA, content: ECountry.RUSSIA }
];

export const CountrySelect = memo(({ className, readonly, value, onChange }: ICountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value) => {
    onChange?.(value as ECountry);
  }, [ onChange ])

  return (
    <Select className={ classNames('', {}, [ className ])}
      readonly={ readonly }
      label={ t('Укажите страну') }
      options={ options }
      value={ value || ECountry.RUSSIA }
      onChange={ onChangeHandler }
    />
  );
});
