import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss'
import React, { memo } from 'react';

interface IIcon {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo(({ className, Svg, inverted }: IIcon) => {
  return (
    <Svg className={ classNames(!inverted ? styles.Icon : styles.inverted, {}, [ className ]) }/>
  );
});
