import { useSelector } from 'react-redux';
import { IStateSchema } from '@/app/providers/StoreProvider';

type TSelector<T> = (state: IStateSchema) => T;
type TResult<T> = [() => T, TSelector<T>];

export function buildSelector<T>(selector: TSelector<T>): TResult<T> {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
}
