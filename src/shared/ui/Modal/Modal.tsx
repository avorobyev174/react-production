import { classNames, type TMods } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss'
import { type ReactNode, type MouseEvent, useState, useRef, useEffect, useCallback, type MutableRefObject } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
const ANIMATION_DELAY = 300;

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: IModalProps) => {
  const [ isClosing, setIsClosing ] = useState(false);
  const [ isMounted, setIsMounted ] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  const onContentClickHandler = (e: MouseEvent) => {
    e.stopPropagation()
  };

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [ onClose ]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [ onCloseHandler ]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [ isOpen ]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [ isOpen, onKeyDown ]);

  const mods: TMods = {
    [ styles.opened ]: isOpen,
    [ styles.isClosing ]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={ classNames(styles.Modal, mods, [ className, theme ])}>
        <div className={ styles.overlay } onClick={ onCloseHandler }>
          <div className={ styles.content } onClick={ onContentClickHandler }>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};
