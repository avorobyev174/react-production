import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Icon.module.scss'
import React, { memo } from 'react';

interface IIcon {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IIcon) => {
  return (
    <Svg className={ classNames(styles.Icon, {}, [ className ]) }/>
  );
});
