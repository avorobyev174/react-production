import { useCallback, useRef } from 'react';
import { type TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timerRef = useRef<TimeoutId>();

  return useCallback((...args: any[]) => {
    if (!timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [ callback, delay ])
}
