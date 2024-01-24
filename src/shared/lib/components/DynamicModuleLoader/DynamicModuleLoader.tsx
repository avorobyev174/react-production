import { type FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type IReduxStoreWithManager, type TStateSchemaKey } from 'app/providers/StoreProvider';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [ name in TStateSchemaKey ]?: Reducer;
}

type ReducersListEntry = [ TStateSchemaKey, Reducer ]

interface IDynamicModuleLoaderProps {
  name: TStateSchemaKey;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const {
    children,
    name,
    reducers,
    removeAfterUnmount
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([ name, reducer ]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@Init ${ name } reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([ name ]: ReducersListEntry) => {
          store.reducerManager.remove(name);
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
