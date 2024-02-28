import { type AnyAction, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type IStateSchema, type TStateSchemaKey } from '@/app/providers/StoreProvider';
import { type IReducerManager, type TMountedReducers } from '@/app/providers/StoreProvider/config/StateSchema';

export function createReducerManager (initialReducers: ReducersMapObject<IStateSchema>): IReducerManager {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: TStateSchemaKey[] = [];
  const mountedReducers: TMountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: IStateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[ key ]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: TStateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[ key ]) {
        return
      }

      reducers[ key ] = reducer
      mountedReducers[ key ] = true;
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: TStateSchemaKey) => {
      if (!key || !reducers[ key ]) {
        return
      }

      delete reducers[ key ]
      keysToRemove.push(key)
      mountedReducers[ key ] = false;

      combinedReducer = combineReducers(reducers)
    }
  }
}
