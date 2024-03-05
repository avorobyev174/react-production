import {
  memo, type MutableRefObject, type ReactNode, useRef, type UIEvent,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Page.module.scss'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { type IStateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { ITestProps } from '@/shared/types/tests';

interface IPageProps extends ITestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  'data-testid'?: string;
}

export const PAGE_ID = 'PAGE_ID'

export const Page = memo((props: IPageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: IStateSchema) => getScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }))
  }, 500);

  return (
    <main
      id={PAGE_ID}
      data-testid={ props['data-testid'] ?? 'Page' }
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(styles.Page, {}, [ className ])}
    >
      { children }
      { onScrollEnd && <div ref={triggerRef} className={styles.trigger} /> }
    </main>
  );
});
