import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Card.module.scss'
import { type HTMLAttributes, memo, type ReactNode } from 'react';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: ICardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={ classNames(styles.Card, {}, [ className ]) }
      { ...otherProps }
    >
      { children }
    </div>
  );
});
