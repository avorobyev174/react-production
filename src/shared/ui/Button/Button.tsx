import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum EButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
  square?: boolean;
  size?: EButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = EButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [ styles[ theme ] ]: true,
    [ styles.square ]: square,
    [ styles[ size ]  ]: true
  };

  return (
    <button
      className={ classNames(styles.Button, mods, [ className ])}
      { ...otherProps }
    >
      { children }
    </button>
  );
};
