import { type FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type IReduxStoreWithManager, type TStateSchemaKey } from 'app/providers/StoreProvider';
import { type Reducer } from '@reduxjs/toolkit';

export type TReducersList = {
  [ name in TStateSchemaKey ]?: Reducer;
}

interface IDynamicModuleLoaderProps {
  name: TStateSchemaKey;
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const {
    children,
    name,
    reducers,
    removeAfterUnmount = true
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([ name, reducer ]) => {
      store.reducerManager.add(name as TStateSchemaKey, reducer);
      dispatch({ type: `@Init ${ name } reducer` });
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
