import { type DeepPartial } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entites/Counter/model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue', () => {
  test('', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounterValue(state as IStateSchema)).toEqual(10);
  })
})
