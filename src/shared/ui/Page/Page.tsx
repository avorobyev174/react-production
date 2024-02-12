import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Page.module.scss'
import { memo, type MutableRefObject, type ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: IPageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
    <section
      ref={ wrapperRef }
      className={ classNames(styles.Page, {}, [ className ]) }
    >
      { children }
      <div ref={ triggerRef }></div>
    </section>
  );
});
