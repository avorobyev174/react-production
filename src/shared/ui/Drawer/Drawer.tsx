import { classNames, type TMods } from 'shared/lib/classNames/classNames';
import React, { memo, type ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface IDrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: IDrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
    lazy
  } = props;
  const { theme } = useTheme();
  const {
    isClosing,
    isMounted,
    close
  } = useModal({ animationDelay: 300, onClose, isOpen });

  const mods: TMods = {
    [ styles.opened ]: isOpen,
    [ styles.isClosing ]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={ classNames(styles.Drawer, mods, [ className, theme, 'app_drawer' ]) }>
        <Overlay onClick={ close } />
        <div className={ styles.content }>
          { children }
        </div>
      </div>
    </Portal>
  );
});
