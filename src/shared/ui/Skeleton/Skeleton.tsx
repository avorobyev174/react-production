import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss'
import { type CSSProperties, memo } from 'react';

interface ISkeleton {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo(({ className, height, width, border }: ISkeleton) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return (
    <div
      className={ classNames(styles.Skeleton, {}, [ className ]) }
      style={ style }
    >
    </div>
  );
});
