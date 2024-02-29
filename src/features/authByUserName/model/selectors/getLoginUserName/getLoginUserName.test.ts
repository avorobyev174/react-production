import { type IStateSchema } from '@/app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName test', () => {
  test('should return value', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: 'test',
      },
    }
    expect(getLoginUserName(state as IStateSchema)).toBe('test');
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}
    expect(getLoginUserName(state as IStateSchema)).toBe('');
  })
})
