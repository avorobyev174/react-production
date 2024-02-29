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
  max?: boolean;
}

export const Card = memo((props: ICardProps) => {
  const { className, theme = ECardTheme.NORMAL, max, children, ...otherProps } = props;

  return (
    <div
      className={ classNames(styles.Card, { [ styles.max ]: max }, [ className, styles[ theme ] ]) }
      { ...otherProps }
    >
      { children }
    </div>
  );
});
