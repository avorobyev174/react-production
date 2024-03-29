import { type DetailedHTMLProps, type HTMLAttributes, type ReactNode } from 'react';
import { classNames, type TMods } from '@/shared/lib/classNames/classNames';
import styles from './Flex.module.scss'

export type TFlexJustify = 'start' | 'center' | 'end' | 'between'
export type TFlexAlign = 'start' | 'end' | 'center';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<TFlexJustify, string> = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
};

const alignClasses: Record<TFlexAlign, string> = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
};

const directionClasses: Record<TFlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<TFlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
}

type TDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export interface IFlexProps extends TDivProps {
  className?: string;
  children: ReactNode;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  direction: TFlexDirection;
  gap?: TFlexGap;
  max?: boolean;
}

export const Flex = (props: IFlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '4',
    max,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[ justify ],
    alignClasses[ align ],
    directionClasses[ direction ],
    gap && gapClasses[ gap ],
  ];

  const mods: TMods = {
    [ styles.max ]: max,
  }

  return (
    <div className={classNames(styles.Flex, mods, classes)} { ...otherProps }>
      { children }
    </div>
  );
};
