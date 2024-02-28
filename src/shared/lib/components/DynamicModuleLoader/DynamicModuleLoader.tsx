import { type ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import type { IReduxStoreWithManager, IStateSchema, TStateSchemaKey } from '@/app/providers/StoreProvider';
import { type Reducer } from '@reduxjs/toolkit';

export type TReducersList = {
  [ name in TStateSchemaKey ]?: Reducer<NonNullable<IStateSchema[ name ]>>;
}

interface IDynamicModuleLoaderProps {
  name: TStateSchemaKey;
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: IDynamicModuleLoaderProps) => {
  const {
    children,
    name,
    reducers,
    removeAfterUnmount = true
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([ name, reducer ]) => {
      const mounted = mountedReducers[ name as TStateSchemaKey ];
      if (!mounted) {
        store.reducerManager.add(name as TStateSchemaKey, reducer);
        dispatch({ type: `@Init ${ name } reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([ name ]) => {
          store.reducerManager.remove(name as TStateSchemaKey);
          dispatch({ type: `@Destroy ${ name } reducer` });
        });
      }
    }
  }, [ removeAfterUnmount, dispatch, name, reducers, store.reducerManager ]);

  return (
    <>
      { children }
    </>
  );
};
