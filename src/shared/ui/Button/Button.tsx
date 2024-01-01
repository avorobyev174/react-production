import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum EThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
    <button
      className={ classNames(styles.Button, {}, [ className, styles[ theme ], 'test' ])}
      { ...otherProps }
    >
      { children }
    </button>
  );
};
