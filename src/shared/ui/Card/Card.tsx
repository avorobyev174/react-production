import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Card.module.scss'
import { type HTMLAttributes, memo, type ReactNode } from 'react';
export enum ECardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}
interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: ECardTheme;
}

export const Card = memo((props: ICardProps) => {
  const { className, theme = ECardTheme.NORMAL, children, ...otherProps } = props;

  return (
    <div
      className={ classNames(styles.Card, {}, [ className, styles[ theme ] ]) }
      { ...otherProps }
    >
      { children }
    </div>
  );
});
