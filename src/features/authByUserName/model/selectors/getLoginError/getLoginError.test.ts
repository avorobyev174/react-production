import { type IStateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError test', () => {
  test('should return error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as IStateSchema)).toBe('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginError(state as IStateSchema)).toBe(undefined);
  });
});
