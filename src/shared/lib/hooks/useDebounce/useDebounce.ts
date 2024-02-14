import { useCallback, useRef } from 'react';
import { type TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

export function useDebounce (callback: (...args: any[]) => void, delay: number) {
  const timerRef = useRef<TimeoutId>();

  return useCallback((...args: any[]) => {
    if (!timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal,@typescript-eslint/no-unsafe-argument
      callback(...args);
    }, delay);
  }, [ callback, delay ])
}
