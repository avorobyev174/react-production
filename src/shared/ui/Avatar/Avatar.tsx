import {
  type CSSProperties, memo, ReactNode, useMemo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Avatar.module.scss'
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = memo((props: IAvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,
    fallbackInverted,
  } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size || 100,
    }
  }, [ size ]);

  const errorFallback = (
    <Icon
      inverted={ fallbackInverted }
      Svg={ UserIcon }
      width={ size }
      height={ size }
    />
  );
  const fallback = <Skeleton width={ size } height={ size } border="50%" />;

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      errorFallback={ errorFallback }
      fallback={ fallback }
      className={classNames(style.Avatar, {}, [ className ])}
    />
  );
});
