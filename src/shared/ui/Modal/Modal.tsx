import { classNames, type TMods } from '@/shared/lib/classNames/classNames';
import styles from './Modal.module.scss'
import { type ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: IModalProps) => {
  const {
    isClosing,
    isMounted,
    close
  } = useModal({ animationDelay: 300, onClose, isOpen });
  const { theme } = useTheme();

  const mods: TMods = {
    [ styles.opened ]: isOpen,
    [ styles.isClosing ]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={ classNames(styles.Modal, mods, [ className, theme, 'app_modal' ])}>
        <Overlay onClick={ close }/>
        <div className={ styles.content }>
          { children }
        </div>
      </div>
    </Portal>
  );
};
