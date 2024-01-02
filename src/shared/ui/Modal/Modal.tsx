import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss'
import { type ReactNode, type MouseEvent, useState, useRef, useEffect, useCallback } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
const ANIMATION_DELAY = 300;

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: IModalProps) => {
  const [ isClosing, setIsClosing ] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onContentClickHandler = (e: MouseEvent) => { e.stopPropagation() };
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
    console.log(e.key)
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [ onCloseHandler ]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [ isOpen, onKeyDown ]);

  const mods: Record<string, boolean> = {
    [ styles.opened ]: isOpen,
    [ styles.isClosing ]: isClosing
  };

  return (
    <Portal>
      <div className={ classNames(styles.Modal, mods, [ className ])}>
        <div className={ styles.overlay } onClick={ onCloseHandler }>
          <div className={ styles.content } onClick={ onContentClickHandler }>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};
