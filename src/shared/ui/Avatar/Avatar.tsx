import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Avatar.module.scss'
import { type CSSProperties, memo, useMemo } from 'react';

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo((props: IAvatarProps) => {
  const {
    className,
    src,
    size,
    alt
  } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100
    }
  }, [ size ]);

  return (
    <img
      src={ src }
      alt={ alt }
      style={ styles }
      className={ classNames(style.Avatar, {}, [ className ])}
    />
  );
});
