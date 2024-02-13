import { useCallback, useRef } from 'react';

export function useThrottle (callback: (...args: any[]) => void, delay: number) {
  const throttledRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttledRef.current) {
      // eslint-disable-next-line n/no-callback-literal,@typescript-eslint/no-unsafe-argument
      callback(...args);
      throttledRef.current = true;

      setTimeout(() => {
        throttledRef.current = false;
      }, delay);
    }
  }, [ callback, delay ])
}
