import { type ChangeEvent, memo, useMemo } from 'react';
import { classNames, type TMods } from '@/shared/lib/classNames/classNames';
import styles from './Select.module.scss'

export interface ISelectOption<T extends string> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: ISelectOption<T>[];
  value?: T;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: ISelectProps<T>) => {
  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      value={opt.value}
      className={styles.option}
      key={opt.value}
    >
      { opt.content }
    </option>
  )), [ options ]);

  const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(evt.target.value as T);
    }
  };

  const mods: TMods = {
    [ styles.readonly ]: readonly,
  };

  return (
    <div className={classNames(styles.Wrapper, mods, [ className ])}>
      { label && (
        <span className={classNames(styles.label, mods, [ className ])}>
          { `${ label }>` }
        </span>
      )}
      <select
        disabled={readonly}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        { optionsList }
      </select>
    </div>
  );
};
