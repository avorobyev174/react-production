import { Link, type LinkProps } from 'react-router-dom';
import { memo, type ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: IAppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [ className, styles[ theme ] ])}
      {...otherProps}
    >
      { children }
    </Link>
  );
});
