import { classNames, type TMods } from 'shared/lib/classNames/classNames';
import styles from './Flex.module.scss'
import { memo, type ReactNode } from 'react';

export type TFlexJustify = 'start' | 'center' | 'end' | 'between'
export type TFlexAlign = 'start' | 'end' | 'center';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '4' | '8' | '16' | '32';

export interface IFlexProps {
  className?: string;
  children?: ReactNode;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  direction?: TFlexDirection;
  gap?: TFlexGap;
  max?: boolean;
}

const justifyClasses: Record<TFlexJustify, string> = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween
};

const alignClasses: Record<TFlexAlign, string> = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
};

const directionClasses: Record<TFlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
};

const gapClasses: Record<TFlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32
}

export const Flex = memo((props: IFlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '4',
    max
  } = props;

  const classes = [
    className,
    justifyClasses[ justify ],
    alignClasses[ align ],
    directionClasses[ direction ],
    gap && gapClasses[ gap ]
  ];

  const mods: TMods = {
    [ styles.max ]: max
  }

  return (
    <div className={ classNames(styles.Flex, mods, classes) }>
      { children }
    </div>
  );
});
