import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Icon.module.scss'

interface IIcon extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo(({
  className, Svg, inverted, ...otherProps
}: IIcon) => {
  return (
    <Svg
      className={classNames(!inverted ? styles.Icon : styles.inverted, {}, [ className ])}
      {...otherProps}
    />
  );
});
