import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
  square?: boolean;
  size?: EButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    theme = EButtonTheme.OUTLINE,
    square,
    disabled,
    size = EButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [ styles[ theme ] ]: true,
    [ styles.square ]: square,
    [ styles[ size ] ]: true,
    [ styles.disabled ]: disabled
  };

  return (
    <button
      type='button'
      className={ classNames(styles.Button, mods, [ className ])}
      disabled={ disabled }
      { ...otherProps }
    >
      { children }
    </button>
  );
});
