import { type IStateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword test', () => {
  test('should return value', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        password: '1234'
      }
    }
    expect(getLoginPassword(state as IStateSchema)).toBe('1234');
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}
    expect(getLoginPassword(state as IStateSchema)).toBe('');
  })
})
